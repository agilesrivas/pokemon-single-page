<template>
  <el-container direction="vertical">
    <header-poke/>
    <main>
      <el-row :gutter="10" class="filter-poke">
        <el-col :span="12">
          <el-select
            v-model="search"
            filterable
            reserve-keyword
            placeholder="Please enter a Pokemon"
          >
            <el-option v-for="(poke,i) in pagination" :key="i" :label="poke.name" :value="poke.name"></el-option>
          </el-select>
        </el-col>
        <el-col :span="12">
          <el-pagination
            @current-change="handleCurrentChange"
            :page-size="12"
            :page-count="total"
            layout="total, prev, pager, next"
            :total="total"
          ></el-pagination>
        </el-col>
      </el-row>
      <el-row :gutter="10" class="filter-poke">
        <card-poke v-for="(item,index) in getSelectPoke" :key="index" :poke="item"/>
      </el-row>
    </main>
  </el-container>
</template>

<script>
import HeaderPoke from "../components/Header_Poke";
import CardPoke from "../components/cards/Card_Poke";
import { Loading } from "element-ui";
import PokeApi from "../services/PokeApi";

export default {
  name: "Home",
  data() {
    return {
      pokemons: [],
      search: "",
      currentPage: 1
    };
  },
  components: {
    HeaderPoke,
    CardPoke,
  },
  computed: {
    total() {
      return this.$store.getters.getPoke.length;
    },
    getSelectPoke() {
      let givePoke = "";
      if (this.search !== "") {
        givePoke = this.pagination.filter(
          poke =>
            !this.search ||
            poke.name.toLowerCase().includes(this.search.toLowerCase())
        );
      } else {
        givePoke = this.pagination;
      }
      this.search = "";
      return givePoke;
    },
    pagination: function() {
      return this.pokemons.slice(
        this.currentPage * 14 - 14,
        this.currentPage * 14
      );

    }
  },
  methods: {
    handleCurrentChange(val) {
      this.currentPage = val;
    },
    pokeGo() {
      for (let index = 0; index < this.$store.getters.getPoke.length; index++) {
        const element = this.$store.getters.getPoke[index];
        PokeApi.One(element.url)
          .then(response => {
            let poke = {
              id: response.id,
              name: response.name,
              abilities: response.abilities,
              experience: response.base_experience,
              sprites: response.sprites,
              stat: response.stats,
              types: response.types,
              specie: response.species,
              moves: response.moves
            };
            this.pokemons.push(poke);
          })
          .catch(error => {});
      }
      return true;
    }
  },
  beforeCreate() {
    const body = document.querySelector("body");
    body.removeAttribute("class", "body-poke");
  },
  created() {
    if (this.$store.getters.getPoke.length === 0) {
      let instance = Loading.service({ fullscreen: true });
      PokeApi.All("pokemon")
        .then(response => {
          this.$store.commit("setPoke", response.results);
          this.pokeGo();
          instance.close();
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted(){
    let instance = Loading.service({ fullscreen: true });
    this.pokeGo();
    instance.close();
      
      
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.filter-poke {
  margin-top: 15px;
}
</style>
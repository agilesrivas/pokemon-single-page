<template>
  <el-container direction="vertical">
    <header-poke/>
        <main>
      <el-table :data="getGamesSearch" style="width: 100%" v-loading="loading">
        <el-table-column label="Generations Names" prop="name"></el-table-column>
        <el-table-column align="right">
          <template slot="header" slot-scope="scope">
            <el-input v-model="filter" size="mini" placeholder="Type to search"/>
          </template>
        </el-table-column>
      </el-table>
    </main>
  </el-container>
</template>

<script>
import HeaderPoke from '../components/Header_Poke';
import PokeApi from "../services/PokeApi";

export default {
  name: "Games",

  data() {
    return {
      games: [],
      filter: null,
                      loading:true

    };
  },
  components:{
      HeaderPoke
  },
  computed: {
    getGamesSearch() {
      let givePoke = "";
      if (this.filter !== "") {
        givePoke = this.games.filter(
          game =>
            !this.filter ||
            game.name.toLowerCase().includes(this.filter.toLowerCase())
        );
      } else {
        givePoke = this.games;
      }
      this.filter = "";
      return givePoke;
    }
  },
  methods: {},
  created() {
    PokeApi.All("generation")
      .then(response => {
        this.games = response.results;
        this.loading = false;
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style scoped>
</style>
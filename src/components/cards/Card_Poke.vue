<template>  
<el-col :span="6" class="col-rancho-card">
  <el-card v-if="active">
    <div slot="header">
      <span class="text-poke">{{poke.name}}</span>
        <el-button @click="capture(poke)" style="float: right; padding: 1px 0" ><img src="../../assets/images/Pokebola-pokeball.png" class="image-poke-button"></el-button>
    </div>
      <el-card>
        <img :src="poke.sprites.front_default" class="image">
        <div style="padding: 14px;">
          <span>Experiencia: {{poke.experience}}</span>
          <br>
          <span>Tipos</span>
          <div class="bottom clearfix" v-for="(i,type) in poke.types" :key="type">
            <span>{{i.type.name}}</span>
          </div>
        </div>
      </el-card>
    </el-card>
    <el-button v-else @click="changeCard" class="poke-card">
      <img src="../../assets/images/indice.jpg" class="image">
    </el-button>
  </el-col>
</template>

<script>
import ApplicationPokemon from "../../services/ApplicationServiceStorage.js";
export default {
  name: "CardPoke",
  props: ["poke"],
  data() {
    return {
      active: false
    };
  },
  methods: {
    changeCard() {
      this.active = true;
    },
    capture(poke) {
      ApplicationPokemon.create(poke)
        .then(response => {
          console.log(response);
        })
        .catch(error => {});
    }
  },
  mounted() {
   
  }
};
</script>

<style>

.back-poke{
  background:tan;
}
.text-poke {
  text-align: center;
}
.poke-card {
  padding: 0;
  width:80%;
  justify-content:center;
  height: 80%;
  margin-top:10px;
}
.image {
  width: 100%;
  height: 100%;
}
.image-poke-button {
  width: 25px;
  height: 25px;
}
</style>
<template>
  <el-container direction="vertical">
    <header-poke/>
    <main>
      <el-carousel :interval="4000" type="card" height="500px">
        <el-carousel-item v-for="(i,obj) in backpack" :key="obj">
          <h2 class="h2-poke">{{i.name}}</h2>
          <img :src="i.sprites.front_default" :alt="i.name">
        </el-carousel-item>
         <el-carousel-item v-for="(i,obj) in backpack" :key="obj">
          <h2 class="h2-poke">{{i.name}}</h2>
          <img :src="i.sprites.back_default" :alt="i.name">
        </el-carousel-item>
      </el-carousel>
    </main>
  </el-container>
</template>

<script>
import ApplicationPokemon from "./../services/ApplicationServiceStorage.js";
import { Loading } from "element-ui";
import HeaderPoke from "../components/Header_Poke";

export default {
  data() {
    return {
      backpack: []
    };
  },
  components: {
    HeaderPoke
  },
  methods: {},
  created() {
    let instance = Loading.service({ fullscreen: true });
    ApplicationPokemon.getAll()
      .then(response => {
        this.backpack = response;
        console.log(this.backpack);
        instance.close();
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style scoped>
img{
  width: 100%;
  height: 100%;
}
.h2-poke{
  justify-content: center;
  text-align: center;

}
</style>
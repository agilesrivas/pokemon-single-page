<template>
    <el-row>
        <el-col :span="24">
        <header>
            <img id="headerPoke" src="../assets/images/Pokemon.png" alt="">
        </header> 
        <el-menu  class="el-menu-demo el-menu-poke" mode="horizontal"  >
        <el-menu-item index="0" @click="$router.push({name:'home'})">Home</el-menu-item>
        <el-submenu index="1" @click="$router.push({name:'market'})">
            <template slot="title">Market</template>
            <el-menu-item index="2" @click="$router.push({name:'berries'})">Berries</el-menu-item>
            <el-menu-item index="3" @click="$router.push({name:'items'})">Items</el-menu-item>
        </el-submenu>
        <el-menu-item index="4" @click="$router.push({name:'habitats'})" >Habitat</el-menu-item>
        <el-menu-item index="/perfil" disabled >Perfil</el-menu-item>
        <el-menu-item index="5" @click="$router.push({name:'games'})" >Games</el-menu-item>
        <el-menu-item index="/newGame" disabled >New Game</el-menu-item>
        <el-menu-item index="6" @click="$router.push({name:'backpack'})" >BackPack</el-menu-item>
        <el-menu-item index="8"><a href="https://pokeapi.co/docs/v2.html/" target="_blank">PokeApi</a></el-menu-item>
        </el-menu>
    </el-col>
    </el-row>
         
</template>

<script>
    export default {
        data(){
            return {
                activeIndex:true
            }
        },
        methods:{
            
           
        }
    }
</script>

<style scoped>
#headerPoke{
  width: 100%;
  height:180px;
}
.el-menu-poke{
    background:black;
}
</style>
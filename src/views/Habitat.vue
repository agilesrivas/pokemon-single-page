<template>
     <el-container direction="vertical">
        <header-poke/>
                <main>
                    <el-row >
                        <el-col :span="24">
                        <el-table 
                        v-loading="loading"
                        :data="getPokemonSearch"
                        style="width: 100%">
                        <el-table-column
                        label="Habitat"
                        prop="name">
                        </el-table-column>
                        <el-table-column
                        align="right">
                        <template slot-scope="scope">
                            <el-button
                            size="medium"
                            @click="LinkApiPokeSpecies(scope.row.name)"
                           >Ver</el-button>
                        </template>
                        </el-table-column>
                    </el-table>
                        </el-col>
                    </el-row>
                </main>
    </el-container>
</template>

<script>
import HeaderPoke from '../components/Header_Poke';
import { Loading } from 'element-ui';
import PokeApi from '../services/PokeApi';
    export default {
        name:'Habitat',
        data(){
            return{
                search:'',
                currentPage:0,
                loading:true,
                searchPokeHabitat:'',
                pokemon_habitat:[],
                pokemon_species:[]
            }
        },
         components:{
        HeaderPoke,
    },
    computed:{
    getPokemonSearch(){
      let givePoke = "";
    if(this.search!==""){
      givePoke = this.pokemon_habitat.filter(poke =>!this.search || poke.name.toLowerCase().includes(this.search.toLowerCase()));
    }else{
        givePoke=this.pokemon_habitat;
    }
    this.search="";
       return givePoke;
    },
     getPokesinHabitat(){
      let givePoke = "";
    if(this.searchPokeHabitat!==""){
      givePoke = this.pokemon_species.filter(poke =>!this.searchPokeHabitat || poke.name.toLowerCase().includes(this.searchPokeHabitat.toLowerCase()));
    }else{
        givePoke=this.pokemon_species;
    }
    this.searchPokeHabitat="";
       return givePoke;
    },
  

},
methods:{
    LinkApiPokeSpecies(id){
        console.log(id);
       this.$router.push({name:'detail-habitat',params:{id:id}})
    }
},
        created(){
            
               /* PokeApi.All("pokemon-habitat/"+this.$router.params.id).
                then((response)=>{
                    this.pokemon_species=response.results;
                    this.loading=false;
                    console.log(response);
                }).catch((error)=>{

                })*/
          
                PokeApi.All("pokemon-habitat").
                then((response)=>{
                    this.pokemon_habitat=response.results;
                    this.loading=false;
                    console.log(response);
                }).catch((error)=>{

                })
            
                
        },
    }
</script>

<style>

</style>
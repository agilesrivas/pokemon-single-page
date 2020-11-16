<template>
    <el-container direction="vertical">
        <header-poke/>
                <main>
                   
                    
                </main>
    </el-container>
</template>

<script>
import HeaderPoke from '../components/Header_Poke';
import PokeApi from '../services/PokeApi';
import CardPoke from '../components/cards/Card_Poke';
    export default {
        name:'Board',
        data(){
            return {
                pokemon:null
            }
        },
        components:{
            HeaderPoke,
            CardPoke
        },
        created(){
            PokeApi.OneName(this.$route.params.name,"pokemon").then((response)=>{
                let poke={
                    id:response.id,
                    name:response.name,
                    abilities:response.abilities,
                    experience:response.base_experience,
                    sprites:response.sprites,
                    stat:response.stats,
                    types:response.types,
                    specie:response.species,
                    moves:response.moves
                };
                this.pokemon=poke;
            }).catch((error)=>{

            })
        }
    }
</script>

<style scoped>
.el-rancho-row-poke{
    margin-top: 15px;
    padding-left: 15px;
}
</style>
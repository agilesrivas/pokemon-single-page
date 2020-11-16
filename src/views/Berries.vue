<template>
    <el-container direction="vertical">
        <header-poke/>
                <main>
                    <el-table :data="getBerriePoke" style="width: 100%" v-loading="loading">
        <el-table-column label="Berry Names" prop="name"></el-table-column>
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
        data(){
            return {
                berries:[],
                filter:null,
                loading:true
            }
        },
        components:{
            HeaderPoke
        },
        computed:{
            getBerriePoke() {
      let givePoke = "";
      if (this.filter !== "") {
        givePoke = this.berries.filter(
          item =>
            !this.filter ||
            item.name.toLowerCase().includes(this.filter.toLowerCase())
        );
      } else {
        givePoke = this.berries;
      }
      this.filter = "";
      return givePoke;
    }
        },
        created(){
             PokeApi.All("berry").
                then((response)=>{
                    this.berries=response.results;
                    this.loading=false;
                    console.log(response);
                }).catch((error)=>{

                })
        }
    }
</script>

<style scoped>

</style>
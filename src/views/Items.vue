<template>
    <el-container direction="vertical">
        <header-poke/>
                <main>
                    <el-table :data="getItemsPoke" style="width: 100%" v-loading="loading">
        <el-table-column label="Items Names" prop="name"></el-table-column>
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
                items:[],
                filter:null,
                                loading:true

            }
        },
        components:{
            HeaderPoke
        },
        computed:{
            getItemsPoke() {
      let givePoke = "";
      if (this.filter !== "") {
        givePoke = this.items.filter(
          item =>
            !this.filter ||
            item.name.toLowerCase().includes(this.filter.toLowerCase())
        );
      } else {
        givePoke = this.items;
      }
      this.filter = "";
      return givePoke;
    }
        },
        created(){
             PokeApi.All("item").
                then((response)=>{
                    this.items=response.results;
                    this.loading=false;
                    console.log(response);
                }).catch((error)=>{

                })
        }
    }
</script>

<style scoped>

</style>
<template>
  <el-col :span="4" >
  
  </el-col>
</template>

<script>
    export default {
        props:[''],
        name:'CardPokeDetail',
        data(){
            return {

            }
        },
        methods:{
           
        },
        created(){
            console.log(this.names_poke);
        }
    }
</script>

<style scoped>
.text-poke{
    font-size: 20px;
    text-align: center;
    font-family: 'Abril Fatface', cursive;
}
.text {
    font-size: 14px;
  }
.item {
    margin-bottom: 18px;
  }
.Card-poke-button{
    width: 100%;
} 
.clearfix:after {
    clear: both;
    text-align:center;
  }
.box-card {
    width: auto;
    margin: 15px 10px 5px 10px;
    -webkit-box-shadow: -9px -5px 79px 2px rgba(0,0,0,0.51);
    -moz-box-shadow: -9px -5px 79px 2px rgba(0,0,0,0.51);
    box-shadow: -9px -5px 79px 2px rgba(0,0,0,0.51);
  }
</style>
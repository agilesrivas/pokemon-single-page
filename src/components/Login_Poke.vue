<template>
      <el-card class="box-card">
            <div slot="header" class="clearfix header-poke-image">
                <img src="../assets/images/logo.jpg" height="120" width="200" alt="">
            </div>
           <el-form  :model="user" :label-position="positionLabel" label-width="100px">
            <el-form-item   label="Username">
                <el-input type="text" v-model="user.username" placeholder="Enter your Username" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item  label="Password">
                <el-input  type="password" v-model="user.password" placeholder="Enter your Password"  autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button class="button-poke" type="primary" :loading="loading" @click="login()">Login</el-button>
            </el-form-item>
        </el-form>
      </el-card>
</template>

<script>
import AuthService from '../services/AuthService';
    export default {
        name:'LoginPoke',
        data(){
            return{
               user:{
                   username:'',
                    password:''
               },
               loading:false,
               positionLabel:'top'
                
            }
        },
        computed:{
            
        },
        methods:{
            login(){
                this.loading=true;
                AuthService.login(this.user.username,this.user.password)
                .then((token)=>{
                    
                    this.$store.commit('setToken', token);
                    this.loading=false;
                    this.$router.push({name:'home'});
                })
                .catch((error)=>{
                    console.log(error);

                })

                
            }
        },

    }
</script>

<style scoped>
.button-poke{
    width: 80%;
    margin-left: 10%;
}
.text {
        font-family: 'Abril Fatface', cursive;

  }

  .header-poke-image{
      text-align: center;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
 .box-card {
    height: auto;
    width: 500px;
    margin-left: 28%;
    margin-top: 3%;
  }
</style>
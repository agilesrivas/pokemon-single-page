<template>
    <el-container >
        <el-main >
            <login-poke></login-poke> 
        </el-main>
    </el-container>
</template>

<script>
import LoginPoke from '../components/Login_Poke';
    export default {
        name:'Login',
        data(){
            return{
                
            }
        },
        components:{
            LoginPoke
        }
    }
</script>

<style scoped>

</style>
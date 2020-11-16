import axios from 'axios';
import appConfig from '../utils/constants';

export default{
   
    All(enpoint){
    return axios.get(appConfig+enpoint+'/')
    .then((response)=>{
           return response.data;
        }).catch((error)=>{
            
        });
    },
    One(url){
        return axios.get(url)
        .then((response)=>{
            return response.data;
        }).catch((error)=>{
            
        })
    },
    OneName(name,endpoint){
        return axios.get(appConfig+endpoint+'/'+name+'/',)
        .then((response)=>{
               return response.data;
        }).catch((error)=>{
            
        })
    }
}
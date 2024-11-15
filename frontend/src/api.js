import axios from "axios"//axios is  a http client cleanway to send network/http request
import {ACCESS_TOKEN} from "./constants"


const api=axios.create({
    baseURL:import.meta.env.VITE_API_URL //import anything which is spcified in the enviroment variable FILE 
}) 
//interceptors actually intercept any request we are gonna sent and automatically add correct headers we dont'have to write headers
api.interceptors.request.use(
    // The interceptor receives the config object of the request, allowing you to modify it.
    (config)=>{
        const token = localStorage.getItem(ACCESS_TOKEN);//retrieving acess token
        if(token){
            config.headers.Authorization=`Bearer ${token}`  // updating request with token if it is present    
           }
           return config // request proceeds
           
       
    },
    (error)=>{
        return Promise.reject(error) // dont request 
    }
   )
   export default api ;
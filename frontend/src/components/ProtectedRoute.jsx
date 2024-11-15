import {Navigate} from "react-router-dom"
import {jwtDecode} from "jwt-decode"
import api from "../api"
import {REFRESH_TOKEN,ACCESS_TOKEN}  from "../constants"
import { useState, useEffect } from "react";

//user will be redirected to this  home route if the user is already registered or login 
function ProtectedRoute({children}){

    const[isAuthorized,setIsAuthorized]=useState(null)


    //when the page will be load automatically it will call auth function 
    useEffect(()=>{
      auth().catch(()=>setIsAuthorized(false))
    },[])


    //after get called refreshtoken will get the refresh token and store it 
    const refreshToken=async()=>{
      const refreshToken=localStorage.getItem(REFRESH_TOKEN)
      try{


         //the frontend will send a request to the backend to refresh the token by sending the current refresh token which is already been stored
         const res= await api.post("/api/token/refresh/",{refresh:refreshToken,
            //during it the interceptors will work in api.js and set up a valid header for it to the http request 

         });


         //if the status is send 200  by the backend that means okay , the request is valid and backend understood that
         if(res.status===200){


            //the new acesstoken will be set up in the localtsorage 
            localStorage.setItem(ACCESS_TOKEN,res.data.access)
            setIsAuthorized(true)
         }else{
            setIsAuthorized(false)
         }
      }catch(error){
         console.log(error)
         setIsAuthorized(false)
      }

    }


    //auth function called it will store the acess token if there is a acess token present , if a acess token is not present then redirect user to the log in page
    const auth=async()=>{
         const token = localStorage.getItem(ACCESS_TOKEN)
         if(!token){
            setIsAuthorized(false)
            return 
         }


         //if there is a token a acess token available then it will be decoded and check the time of expiration  , if it is not expired then set authorisation as tru otherwise call the function refresh token 
         const decoded= jwtDecode(token)
         const tokenExpiration=decoded.exp
         const now = Math.floor(Date.now() / 1000)
         if(tokenExpiration<now){
            await refreshToken()
         }
         else{
            setIsAuthorized(true)
         }
         }
    
    if(isAuthorized===null){
        return <div>loading...</div>
    }
    return isAuthorized? children:<Navigate to="/login"/>
}
export default ProtectedRoute
import React, { useState } from 'react';
import Axios from 'axios';
import { BASE_URL,TOKEN } from './backend';

function useSignup() {

    const [loading,setLoading] = useState(false);

    const [error,setError] = useState({});
    const [msg ,setMsg] = useState('')
    
    const signup = async({name,email,password}:{name:string;email:string;password:string})=>{
           setLoading(true);
    try {
        const response  =  await Axios.post(`${BASE_URL}/auth/signup`,{
                name,email,password,mobile:8368788356,
             },{headers:{
                token:TOKEN
             }})
                  
              if(response.status == 201)
                setMsg('Signup has been done successfully')
               
              console.log('response block:' ,response)
     
    } catch (e) {

        if(e.status == 411)
         setMsg('All fields are required ')
        else if(e.status == 302)
         setMsg('User already exists:')    

    }finally{
        setLoading(false);
    }


    }

  return {
    loading,error,msg,signup
  }
}

export default useSignup

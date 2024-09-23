import React, { useState } from 'react';
import Axios from 'axios';
import { BASE_URL } from './backend';
import { useNavigate } from 'react-router-dom';

function useSignup() {

    const [loading,setLoading] = useState(false);

    const [error,setError] = useState({});
    const [msg ,setMsg] = useState('')

    const navigate = useNavigate();
    
    const signup = async({name,email,password}:{name:string;email:string;password:string})=>{
           setLoading(true);
    try {
        const response  =  await Axios.post(`${BASE_URL}/auth/signup`,{
                name,email,password,mobile:8368788356,
             },{headers:{
             'Content-Type':'application/json'
             }})
                  
              if(response.status == 201){
                setMsg('Signup has been done successfully , please verify you mail :')
                setTimeout(() => {
                     navigate('/signin');
                }, 2000);  
            }
              
     
    } catch (e) {
        console.log('error ',e)
        if(e.status == 411)
         setMsg('All fields are required ')
        else if(e.status == 302)
         setMsg('User already exists:')
        else if(e.code == 'ERR_NETWORK')
         setMsg('No internet  connection:');    
        
    }finally{
        setLoading(false);
    }


    }

  return {
    loading,error,msg,signup
  }
}

export default useSignup

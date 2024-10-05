import { useState } from 'react';
import Axios from 'axios';
import { BASE_URL } from './backend';
import { useNavigate } from 'react-router-dom';

function useSignup() {

    const [loading,setLoading] = useState<boolean>(false);

    const [error] = useState<object>();
    const [msg ,setMsg] = useState<string>('')

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
              
     
    } catch (e ) {
        console.log('error ',e)
        if((e as any).status == 411)
         setMsg('All fields are required ')
        else if((e as any).status == 302)
         setMsg('User already exists:')
        else if((e as any).code == 'ERR_NETWORK')
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

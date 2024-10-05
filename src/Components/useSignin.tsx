import Axios from 'axios';
import {useState} from 'react'
import { BASE_URL } from './backend';
import { userInfo } from './Store/user';
import { useSetRecoilState } from 'recoil';
function useSignin(){
    
    const setInfo  = useSetRecoilState(userInfo);                  
    const [loading,setLoading] = useState<boolean>(false);
    const [error,setError] = useState<boolean>(false);
    const [msg ,setMsg] = useState<string>('')

    const  signin = async({email,password}:{email:string;password:string})=>{
            setLoading(true);
    try {
        const response  =  await Axios.post(`${BASE_URL}/auth/login`,{email,password},{headers:{
                'Content-Type': 'application/json'
              }})

              localStorage.setItem('userInfo' ,JSON.stringify({name:'Ganesh',email,token:response.data.token})) 

              setMsg('Sign in Successfully :')

              setInfo({
                 email,token:response.data.token,name:response.data.name 
              }) 
              //Navigate to Todo page ,after 1 sec of login msg : 
              setTimeout(() => {
                    window.location.href = "/";
              }, 1000);
    
        }
         catch(e){
           setError(true);
         if((e as any).status == '404') 
            setMsg("username or password is incorrect")
         else if((e as any).status == '401')
            setMsg("user not found ")
        
    }finally{
       setLoading(false);
    }

  
}

return {
    loading,msg ,error,signin
  }

}

export default useSignin

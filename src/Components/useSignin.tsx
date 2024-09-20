import Axios from 'axios';
import React ,{useState} from 'react'
import { BASE_URL ,TOKEN} from './backend';
import { useNavigate } from 'react-router-dom';
import { userInfo } from './Store/user';
import { useSetRecoilState } from 'recoil';
function useSignin(){
    const setInfo  = useSetRecoilState(userInfo);                  
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(false);
    const [msg ,setMsg] = useState('')
    const navigate = useNavigate();
    const  signin = async({email,password}:{email:string;password:string})=>{
            setLoading(true);
    try {
        const response  =  await Axios.post(`${BASE_URL}/auth/login`,{email,password},{headers:{
                'Content-Type': 'application/json'
              }})

              localStorage.setItem('userInfo' ,JSON.stringify({name:'Ganesh',email,token:response.data.token})) 

              setMsg('Sign in Successfully :')

              setInfo({
                 email,token:response.data.token,name:'Ganesh '
              }) 
              //Navigate to Todo page ,after 1 sec of login msg : 
              setTimeout(() => {
                    navigate('/todo')
              }, 1000);
    
        }
         catch(e){
           setError(true);
         if(e.status == '404') 
            setMsg("username or password is incorrect")
         else if(e.status == '401')
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

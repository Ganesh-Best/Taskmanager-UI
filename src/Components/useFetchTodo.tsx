import React, { useState ,useEffect } from 'react'
import Axios from 'axios';
import { BASE_URL} from './backend';
import { todos } from './Store/todos';
import { useSetRecoilState } from 'recoil';

function useFetchTodo() {
   const setTodos = useSetRecoilState(todos);
   const [error,setError] = useState(false);
   const [loading,setLoading] = useState(true);
    
   const userInfo :{name:string;email:string,token:string }|null  =   JSON.parse(localStorage.getItem('userInfo'))
    let TOKEN : string ;
    
    if(userInfo)
       TOKEN = userInfo.token;
    
    const  fetchTodos = async()=>{
         
        try {
            
             const response =   await  Axios.get(`${BASE_URL}/todo/todo`,{headers:{
                        token:TOKEN
                      }})
      
               setTodos(response.data.todos)

        } catch (error) {
             setError(true);        
        }finally{
           setLoading(false)
        }
    }

   useEffect(() => {
    
          fetchTodos();
    
   }, []);
  
  
  return {
     error,loading ,fetchTodos 
  }
}

export default useFetchTodo

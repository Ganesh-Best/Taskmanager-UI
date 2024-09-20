import React, { useState ,useEffect } from 'react'
import Axios from 'axios';
import { BASE_URL} from './backend';
import { todos } from './Store/todos';
import { useSetRecoilState } from 'recoil';

function useFetchTodo() {
   const setTodos = useSetRecoilState(todos);
   const [error,setError] = useState(false);
   const [loading,setLoading] = useState(true);
    
   const TOKEN  = localStorage.getItem('token'); 
    
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

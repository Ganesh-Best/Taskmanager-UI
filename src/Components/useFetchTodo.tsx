import React, { useState ,useEffect } from 'react'
import Axios from 'axios';
import { BASE_URL,TOKEN } from './backend';

function useFetchTodo() {
   const [todos,setTodos] = useState([]);
   const [error,setError] = useState(false);
   const [loading,setLoading] = useState(true);
  
    
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
       todos,error,loading ,fetchTodos 
  }
}

export default useFetchTodo

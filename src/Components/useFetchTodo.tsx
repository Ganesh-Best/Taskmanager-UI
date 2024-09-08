import React, { useState ,useEffect } from 'react'
import Axios from 'axios';
import { BASE_URL } from './backend';

function useFetchTodo() {
   const [todos,setTodos] = useState([]);
   const [error,setError] = useState(false);
   const [loading,setLoading] = useState(true);
  
    
    const  fetchTodos = async()=>{
         
        try {
            
             const response =   await  Axios.get(`${BASE_URL}/todo/todo`,{headers:{
                        token:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2Y2UwM2I3ODRkNDhiYTdkZTFlZmZjZiIsImlhdCI6MTcyNTc5Mjk4NCwiZXhwIjoxNzI1ODc5Mzg0fQ.1bPAy7WrpqsjiRAc8--2UTsWN-zVkqLwXOtGQfpoIos'
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
       todos,error,loading
  }
}

export default useFetchTodo

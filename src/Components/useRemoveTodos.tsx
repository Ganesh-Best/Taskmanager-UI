import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { BASE_URL,TOKEN } from './backend';
import useFetchTodo from './useFetchTodo';


function useRemoveTodos() {
   const [errors,setErrors] =useState(false);
   const {fetchTodos} = useFetchTodo();

   const [load,setLoad] =useState(false);

    const removeTodos = async()=>{
                      
          try {
                             setLoad(true);
            const response = await Axios.delete(`${BASE_URL}/todo/todos`,{headers:{
               token:TOKEN
             }})
  
             if(response.data.deleteCount)
                 fetchTodos();
  
          } catch (error) {
              setErrors(true);
          }finally{
            setLoad(false);
          }


    }

    
 
 return {
    removeTodos,errors,load
 }
}

export default useRemoveTodos

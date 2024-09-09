import React, { useState ,useEffect} from 'react'
import Axios from 'axios';
import {BASE_URL,TOKEN} from './backend'

// this is custom hook that return createTodo function ,error and loading
//createTodo function require two argument title and description for creating todo;  
function useCreateTodo() {
    
    const [loading ,setLoading] = useState(false);
    const [error,setError] = useState(false);

    const createTodo = async(title: string,description: string)=>{
         setLoading(true)
         setError(false)   
   try {
     const response  =  await Axios.post(`${BASE_URL}/todo/todo`,{title,description},{
           headers:{
             'Content-Type': 'application/json',
             'token':TOKEN
           }
          }) 
          
         return response.data ;
   } catch (error) {
    console.log("error",error);
     setError(true)
    }finally{
     setLoading(false);
    }

    }


  return {
    error,createTodo,loading
  }
}

export default useCreateTodo

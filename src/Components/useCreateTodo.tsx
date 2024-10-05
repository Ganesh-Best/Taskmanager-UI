import { useState } from 'react'
import Axios from 'axios';
import {BASE_URL} from './backend'
import useFetchTodo from './useFetchTodo';
import { userInterface } from './Structure';
// this is custom hook that return createTodo function ,error and loading
//createTodo function require two argument title and description for creating todo;  
function useCreateTodo() {
    const {fetchTodos} = useFetchTodo(); 
    const [loading ,setLoading] = useState(false); 
    const [error,setError] = useState(false);
    
    const userInfo : userInterface|null  =   localStorage.getItem('userInfo')?JSON.parse(localStorage.getItem('userInfo') as string )   : null ;
    let TOKEN : string ;
    
    if(userInfo)
       TOKEN = userInfo.token;

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
          fetchTodos();
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

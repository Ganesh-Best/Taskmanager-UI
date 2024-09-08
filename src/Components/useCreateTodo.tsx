import React, { useState ,useEffect} from 'react'
import Axios from 'axios';

// this is custom hook that return createTodo function ,error and loading
//createTodo function require two argument title and description for creating todo;  
function useCreateTodo() {
    
    const [loading ,setLoading] = useState(false);
    const [error,setError] = useState(false);

    const createTodo = async(title: string,description: string)=>{
         setLoading(true)
         setError(false)   
   try {
     const response  =  await Axios.post('http://localhost/todo/todo',{title,description},{
           headers:{
             'Content-Type': 'application/json',
             'token':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2Y2UwM2I3ODRkNDhiYTdkZTFlZmZjZiIsImlhdCI6MTcyNTc5Mjk4NCwiZXhwIjoxNzI1ODc5Mzg0fQ.1bPAy7WrpqsjiRAc8--2UTsWN-zVkqLwXOtGQfpoIos'
           }
          }) 
          console.log(response.data);
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

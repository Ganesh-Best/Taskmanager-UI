import  Axios  from 'axios';
import React, { useState ,useEffect} from 'react'
import { BASE_URL } from './backend';
import useFetchTodo from './useFetchTodo';

function useDeleteTodo() {
    const {fetchTodos} = useFetchTodo();
    const [loading1,setloading] =useState(false);
    const [error1,setError] = useState(false);
    const userInfo :{name:string;email:string,token:string }|null  =   JSON.parse(localStorage.getItem('userInfo'))
    let TOKEN : string ;
    
    if(userInfo)
       TOKEN = userInfo.token;
    
    const deleteTodo = async(id : string)=>{
          setloading(true)
                try {
                    
           const response = await Axios.patch(`${BASE_URL}/todo/todo/${id}/done`,{},{headers:{
                    token:TOKEN
                }})

               fetchTodos();
               
              } catch (error) {
                 console.log('error',error)  
                setError(true)


                }finally{
                  setloading(false)
                  
                }

    }

    
    
  return {
    loading1,error1,deleteTodo
  }
    
}

export default useDeleteTodo

import  Axios  from 'axios';
import { useState } from 'react'
import { BASE_URL } from './backend';
import useFetchTodo from './useFetchTodo';
import { userInterface } from './Structure';

function useDeleteTodo() {
    const {fetchTodos} = useFetchTodo();
    const [loading1,setloading] =useState(false);
    const [error1,setError] = useState(false);
    const userInfo : userInterface|null  =   localStorage.getItem('userInfo')?JSON.parse(localStorage.getItem('userInfo') as string )   : null ;
    let TOKEN : string ;
    
    if(userInfo)
       TOKEN = userInfo.token;
    
    const deleteTodo = async(id : string)=>{
          setloading(true)
                try {
           //@ts-ignore         
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

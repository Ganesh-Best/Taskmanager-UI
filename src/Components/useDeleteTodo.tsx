import  Axios  from 'axios';
import React, { useState ,useEffect} from 'react'
import { BASE_URL,TOKEN } from './backend';

function useDeleteTodo() {
    const  [loading1,setloading] =useState(false);
    const [error1,setError] = useState(false);
  
    const deleteTodo = async(id : string)=>{
          setloading(true)
                try {
                    
           const response = await Axios.patch(`${BASE_URL}/todo/todo/${id}/done`,{},{headers:{
                    token:TOKEN
                }})
               console.log('updated Todo :',response.data)
               
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

import  {  useState } from 'react';
import Axios from 'axios';
import { BASE_URL} from './backend';
import useFetchTodo from './useFetchTodo';
import { userInterface } from './Structure';

function useRemoveTodos() {
   const [errors,setErrors] =useState(false);
   const {fetchTodos} = useFetchTodo();

   const [load,setLoad] =useState(false);
   
   const userInfo : userInterface|null  =   localStorage.getItem('userInfo')?JSON.parse(localStorage.getItem('userInfo') as string )   : null ;
   
   let TOKEN : string ;
    
    if(userInfo)
       TOKEN = userInfo.token;

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

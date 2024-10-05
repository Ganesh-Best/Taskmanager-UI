import { useState ,useEffect } from 'react'
import Axios from 'axios';
import { BASE_URL} from './backend';
import { originalTodos, todos } from './Store/todos';
import { useSetRecoilState } from 'recoil';
import { userInterface } from './Structure';

function useFetchTodo() {
   const setTodos = useSetRecoilState(todos);
   const setOriginalTodos = useSetRecoilState(originalTodos);
   const [error,setError] = useState(false);
   const [loading,setLoading] = useState(true);
    
   const userInfo : userInterface|null  =   localStorage.getItem('userInfo')?JSON.parse(localStorage.getItem('userInfo') as string )   : null ;
    let TOKEN : string ;
    
    if(userInfo)
       TOKEN = userInfo.token;
    
    const  fetchTodos = async()=>{
         
        try {
            
             const response =   await  Axios.get(`${BASE_URL}/todo/todo`,{headers:{
                        token:TOKEN
                      }})
      
               setTodos(response.data.todos);
               setOriginalTodos(response.data.todos)
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
     error,loading ,fetchTodos 
  }
}

export default useFetchTodo

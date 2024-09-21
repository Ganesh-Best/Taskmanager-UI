import React, { useEffect } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { originalTodos, searchQuery, todos } from './Store/todos'

function usefilterTodo() {
  const setTodos  = useSetRecoilState(todos);  
  const TODOS  = useRecoilValue(todos);
  const query = useRecoilValue(searchQuery);
  const originalTODOS = useRecoilValue(originalTodos);

  useEffect(()=>{
  
    if(query){ 
        
        console.log(`usereffect query:`)
        let filterTodos =  TODOS.filter((todo,index)=>todo.title.includes(query)||todo.description.includes(query))
           
        console.log('filter todos',filterTodos);
        setTodos(filterTodos);
        
      }else{
        setTodos(originalTODOS);
        
      }


  },[query])
       

}

export default usefilterTodo

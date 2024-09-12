import React, { useState } from 'react';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Typography from '@mui/material/Typography';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

import useCreateTodo from './useCreateTodo';
import CircularProgress from '@mui/material/CircularProgress';
import useFetchTodo from './useFetchTodo';
import useDeleteTodo from './useDeleteTodo';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { todos } from './Store/todos';

interface todo {
  title:string;
  description:string;
}
function Mainarea() {
  return (
    <div>
      <Addtodo/>
      <Showtodo/>
    </div>
  )
}

function Addtodo(){
    const {fetchTodos} = useFetchTodo()
    const [title,setTitle] =useState<string>("");
    const [description,setDescription] = useState<string>("");
    const {createTodo,error,loading}    =   useCreateTodo();
    const setTodos = useSetRecoilState(todos)
    console.log('Before click on add todo :',error) 
    const addTodo = ()=>{
      
      if(title && description){
       createTodo(title,description);
       //@ts-ignore
       
      }
      
      setTitle('');
      setDescription('');

  }
   if(error)
     alert('unable to add todo')

  
 

    return <div style={{marginTop:"20px"}}>
     <TextField onChange={e=>setTitle(e.target.value)} value={title} id="outlined-basic" label="Title" variant="outlined" />
     <TextField onChange={e=>setDescription(e.target.value)} value={description} id="outlined-basic" label="Description" variant="outlined" />
     <Button onClick={addTodo} variant="contained" color="primary" style={{height:'54px'}}>
       {loading?<CircularProgress/>:<AddCircleOutlineIcon/>} 
     </Button>
     
    </div>
}

function Showtodo(){
   
   useFetchTodo();

  const TODOS = useRecoilValue(todos);
   
  

  const {error1,loading1,deleteTodo}  = useDeleteTodo() ;
 

  const deleteHandler = (id : string)=>{
    
        deleteTodo(id)

  }
  if(error1)
    alert('unable to delete Todo');

  if(loading1)
    return <div style={{width:"50rem",marginTop:'60px'}}>

      <div style={{}}>
         <Typography variant="h4" color="initial">Todo Lists</Typography>
      </div>
  <CircularProgress sx={{marginLeft:'70px',marginTop:'40px'}}/>    
    </div> 
  
   if(TODOS)      
    return  <div style={{width:"50rem",marginTop:'60px'}}>
      <div style={{}}>
      <Typography variant="h4" color="initial">Todo Lists</Typography>
      </div>
     {TODOS.map((todo,key)=>(
    <div key={key} style={{display:"flex",flexDirection:"row",justifyContent:"space-between",backgroundColor:"#27d",marginTop:"10px",borderRadius:"0.4rem"}}>
    <div  style={{backgroundColor:"#27d",padding:"37px",borderRadius:"0.4rem"}}>
       <Typography variant="body1" color="white" sx={{fontSize:"1.4rem",textDecoration:todo.completed?'line-through':'none'}}>
       {todo.title} : {todo.description}
       </Typography>   
    </div>
    
    <Button variant="contained" onClick={e=>deleteHandler(todo._id)} color="primary" style={{padding:"10px",height:"105px"}}>
        <DeleteForeverOutlinedIcon/>
      </Button>       
  </div>

     ))}
    
     
      
    </div>
}

export default Mainarea

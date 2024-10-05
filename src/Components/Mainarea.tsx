import  { useState , FC } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Typography from '@mui/material/Typography';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import useCreateTodo from './useCreateTodo';
import CircularProgress from '@mui/material/CircularProgress';
import useFetchTodo from './useFetchTodo';
import useDeleteTodo from './useDeleteTodo';
import { useRecoilValue} from 'recoil';
import { searchQuery, todos } from './Store/todos';
import useRemoveTodos from './useRemoveTodos';
import { countTodo } from './Selectors/counTodo';
import Navbar from './Navbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { darkMode } from './Store/theme';

import usefilterTodo from './usefilterTodo';



const  Mainarea : FC = () => {
  return (
    <div>
      <Navbar/>
      <Addtodo/>
      <Showtodo/>
    </div>
  )
}

const  Addtodo: FC = () =>{

     useFetchTodo();

    const  {removeTodos,load} = useRemoveTodos();
    const [title,setTitle] =useState<string>("");
    const [description,setDescription] = useState<string>("");
    const {createTodo,error,loading}    =   useCreateTodo();
    // const setTodos = useSetRecoilState(todos)
    const  totalTodos = useRecoilValue(countTodo);
    console.log('Before click on add todo :',error) 

    const mode = useRecoilValue(darkMode);

    const darkTheme = createTheme({
      palette: {
        mode: (mode)?'dark':'light',
        primary: {
          main: '#1976d2',
        },
      },
      components: {
        MuiButton: {
          styleOverrides: {
            root: () => ({
              // fontSize: "1.2rem", // Increase button font size
               padding: "10px 20px", // Custom padding
               borderRadius: 20, // Rounded corners for the button
              backgroundColor: mode ? 'black' : '#1976d2', // Dark mode and light mode background
              color:  mode ? '#ffffff' : '#ffffff', // White text for both modes
              transition: '0.3s', // Smooth transition on hover
              '&:hover': {
               backgroundColor: mode ? 'lightblack' : '#1565c0', // Different hover color based on mode
               boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.5)'
              },
              
            })
          }
        },
        MuiTextField:{
          styleOverrides:{
            root:{
                   '& .MuiInputBase-root': {
                  backgroundColor: mode ? '#171717' : 'white', // Background color of the text box
                  color: mode ? 'white' : '#171717', // Text color in dark mode
                },
                '& .MuiInputLabel-root': {
                  color: mode ? 'white' : '#1565c0', // Label color in dark mode
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: mode ? 'black' : '#1565c0', // Border color in dark mode
                  },
                  '&:hover fieldset': {
                    borderColor: mode ? '#171717' : 'white', // Hover effect border color
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: mode ? '#171717' : 'white', // Focused state border color
                  },
                }
            }
          } 
        }
  
      }
      
    })

   
    const addTodo = () : void=>{
      
      if(title && description){
       createTodo(title,description);
       //@ts-ignore
       
      }
      
      setTitle('');
      setDescription('');

  }

   if(error)
     alert('unable to add todo')

   const removeAllTodos = (): void =>{
     console.log('remove button pressed :');
   
     //If there  task are there  then it will delete otherwise not:
     if(totalTodos)
      removeTodos();

   }
 

    return <div style={{marginTop:"20px"}}>
      <ThemeProvider theme={darkTheme}>
     <TextField onChange={e=>setTitle(e.target.value)} value={title} id="outlined-basic" label="Title" variant="outlined" />
     <TextField onChange={e=>setDescription(e.target.value)} value={description} id="outlined-basic" label="Description" variant="outlined" />
     <Button onClick={addTodo} variant="contained" color="primary" style={{height:'54px', maxHeight:'auto'}}>
       {loading?<CircularProgress/>:<AddCircleOutlineIcon/>} 
     </Button>
     <Button variant="contained" color="primary" onClick={removeAllTodos} style={{height:'54px'}}>
       {load?<CircularProgress sx={{ color:'white'}} />:'Delete All'}       
     </Button>
     </ThemeProvider>
    </div>
}

const  Showtodo: FC = ()=>{
  
  usefilterTodo();             
  
  const mode = useRecoilValue(darkMode)
   
   useFetchTodo();

  const TODOS = useRecoilValue(todos);
   
  const searchValue = useRecoilValue(searchQuery);

  console.log('search Value',searchValue);

  const {error1,loading1,deleteTodo}  = useDeleteTodo() ;
 

  const deleteHandler = (id : string) : void =>{
    
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
  
  if(!TODOS.length)
    return <div style={{marginTop:"20px",marginLeft:"40px"}}>
      <Typography variant="h4" color="initial" sx={{color:(mode)?'white':'black'}}>Task Not Found :</Typography>
      </div>
     
   if(TODOS.length)      
    return  <div style={{width:"50rem",marginTop:'60px'}}>
      <div style={{}}>
      <Typography variant="h4" color="initial"sx={{color:(mode)?'white':'black',marginLeft:"40px"}} >All Tasks :</Typography>
      </div>
     {TODOS.map((todo,key)=>(
    <div key={key} style={{display:"flex",flexDirection:"row",justifyContent:"space-between",backgroundColor:(mode)?'white':'#27d' ,marginTop:"10px",borderRadius:"0.4rem"}}>
    <div  style={{backgroundColor:(mode)?'white':'#27d',padding:"37px",borderRadius:"0.4rem"}}>
       <Typography variant="body1" color="white" sx={{fontSize:"1.4rem",color:(mode)?'black':'white',textDecoration:todo.completed?'line-through':'none'}}>
       {todo.title} : {todo.description}
       </Typography>   
    </div>
    
    <Button variant="contained" onClick={()=>deleteHandler(todo._id)} color="primary" style={{padding:"10px",height:"auto",backgroundColor:(mode)?'black':'#27d'}}>
        <DeleteForeverOutlinedIcon/>
      </Button>       
  </div>

     ))}
    
     
      
    </div>
}

export default Mainarea

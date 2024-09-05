import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Typography from '@mui/material/Typography';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';



function Mainarea() {
  return (
    <div>
      <Addtodo/>
      <Showtodo/>
    </div>
  )
}

function Addtodo(){
    
    return <div style={{marginTop:"20px"}}>
     <TextField id="outlined-basic" label="Title" variant="outlined" />
     <TextField id="outlined-basic" label="Description" variant="outlined" />
     <Button variant="contained" color="primary" style={{height:'54px'}}>
       <AddCircleOutlineIcon/>
     </Button>
    </div>
}

function Showtodo(){
    return  <div style={{width:"50rem",marginTop:'60px'}}>
      <div style={{}}>
      <Typography variant="h4" color="initial">Todo Lists</Typography>
      </div>

      <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",backgroundColor:"#27d",marginTop:"10px",borderRadius:"0.4rem"}}>
      <div style={{backgroundColor:"#27d",padding:"20px",borderRadius:"0.4rem"}}>
         <Typography variant="body1" color="white" sx={{fontSize:"1.4rem"}}>
         study : "I have to complete MERN stack projects "
         </Typography>   
      </div>
      
      <Button variant="contained" color="primary" style={{padding:"10px",height:"113px"}}>
          <DeleteForeverOutlinedIcon/>
        </Button> 
      
    </div>
      
    </div>
}

export default Mainarea

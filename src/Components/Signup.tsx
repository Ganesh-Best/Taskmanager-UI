import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom';
import useSignup from './useSignup';
import CircularProgress from '@mui/material/CircularProgress';
import Alertbox from './Alertbox';


function Signup() {

    const {loading,error,msg,signup} =useSignup();
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [cpassword,setCPassword] = useState('')
    const [key,setKey] = useState(0);

    const signupHandler = ()=>{
    
        
         if(password === cpassword)
         signup({name,email,password});

         setKey(key+1)
    }

    if(error)
        console.log('Error occurs',msg)
   
    

  return (
 <div style={{display:'flex',justifyContent:'center'  }}>
     
     <Card variant='outlined'    
      sx={{ width:'430px',display:'flex',padding:'20px',flexDirection:'column',marginTop:'90px',height:'auto'}}
      noValidate
      autoComplete="on"
    >  <h1>Sign Up</h1>
     <Typography variant="body2" color="initial">Please fill this form for create an account</Typography> <br/>
      <TextField id="name" onChange={e=>setName(e.target.value)}  label="Name" variant="standard" /> <br/>
      <TextField id="email" onChange={e=>setEmail(e.target.value)}   type='email' label="Email" variant="standard" /> <br/>
      <TextField id= "password" onChange={e=>setPassword(e.target.value)}  type='password' label="Password" variant="standard" /> <br/>
      <TextField id= "cpassword" onChange={e=>setCPassword(e.target.value)}  type='password' label="Confirm Password" variant="standard" /> <br/>
       <Button variant="contained" color="primary" size='large' onClick={signupHandler} sx={{display:"block",width:'110px',borderRadius:'7px'}}>
        {loading?<CircularProgress/>:'Sign Up'} 
       </Button> <br/>
       <Typography variant="caption" color="initial">Already have an account ?   <Link to='/signin'>Signin</Link> </Typography>
       { key !=0  &&<Alertbox key={key} msg ={msg} />} 
    </Card>     
 </div>
  )
}

export default Signup

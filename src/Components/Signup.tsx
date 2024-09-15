import React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import { Link,useNavigate } from 'react-router-dom';


function Signup() {
    
  return (
 <div style={{display:'flex',justifyContent:'center'  }}>
     <Card variant='outlined'    
      sx={{ width:'430px',display:'flex',padding:'20px',flexDirection:'column',marginTop:'90px',height:'auto'}}
      noValidate
      autoComplete="on"
    >  <h1>Sign Up</h1>
     <Typography variant="body2" color="initial">Please fill this form for create an account</Typography> <br/>
      <TextField id="name" label="Name" variant="standard" /> <br/>
      <TextField id="email" type='email' label="Email" variant="standard" /> <br/>
      <TextField id= "password" type='password' label="Password" variant="standard" /> <br/>
      <TextField id= "password" type='password' label="Confirm Password" variant="standard" /> <br/>
       <Button variant="contained" color="primary" size='large' sx={{display:"block",width:'110px',borderRadius:'7px'}}>
         Sign Up
       </Button> <br/>
       <Typography variant="caption" color="initial">Already have an account   <a href='#'>Signin</a> </Typography>
    </Card>     
 </div>
  )
}

export default Signup

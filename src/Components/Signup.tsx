import  { useState ,FC } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom';
import useSignup from './useSignup';
import CircularProgress from '@mui/material/CircularProgress';
import Alertbox from './Alertbox';



const  Signup: FC = ()=> {

    const {loading,error,msg,signup} =useSignup();
    const [name,setName] = useState<string>('')
    const [email,setEmail] = useState<string>('')
    const [password,setPassword] = useState<string>('')
    const [cpassword,setCPassword] = useState<string>('')
    const [key,setKey] = useState<number>(0);

    const signupHandler = (): void =>{
    
        
         if(password === cpassword)
         signup({name,email,password});
  
         //it will change key , that will lead re-render this alert components:
         setKey(key+1)
    }

    if(error)
        console.log('Error occurs',msg)
   
    

  return <>
 <div style={{display:'flex',justifyContent:'center'  }}>
     
     <Card
      component={'form'} 
      variant='outlined'    
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
 </>
}

export default Signup

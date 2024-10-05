import {useState , FC} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom';
import useSignin from './useSignin';
import Alertbox from './Alertbox';
import  CircularProgress  from '@mui/material/CircularProgress';

const  Signin : FC = () => {
    const {loading,msg,signin} = useSignin();

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [key,setKey] =useState(0);

    const signinHandler = ()=>{
         
         if(email && password){ 
            setKey(key=>key+1);
            signin({email,password})
            
        }
         
          
    }

  return (
        <div style={{display:'flex',justifyContent:'center'  }}>
            <Card variant='outlined'
             component={'form'}    
             sx={{ width:'430px',display:'flex',padding:'20px',flexDirection:'column',marginTop:'90px',height:'auto'}}
             noValidate
             autoComplete="on"
           >  <h1>Sign In</h1>
             <TextField id="email" onChange={e=>setEmail(e.target.value)} type='email' label="Email" variant="standard" /> <br/>
             <TextField id= "password" type='password' onChange={e=>setPassword(e.target.value)} label="Password" variant="standard" /> <br/>
              <Button variant="contained" onClick={signinHandler} color="primary" size='large' sx={{display:"block",width:'110px',borderRadius:'7px'}}>
              {loading?<CircularProgress sx={{color:'white'}} />:'Sign In'} 
              </Button> <br/>
              <Typography variant="caption" color="initial">Don't have an account ?   <Link to='/signup'>Signup</Link> </Typography>
             {  key != 0  && <Alertbox key={key} msg={msg} /> } 
           </Card>   
            
        </div>
         )
  
}

export default Signin

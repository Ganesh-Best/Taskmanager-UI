import React, { useEffect, useState } from 'react'
import Alert from '@mui/material/Alert';

function Alertbox({msg}) {
 
  const [show,setShow] = useState(true);
 
  const style = {
    marginTop:'20px',
    display:(show)?'flex':'none',
  }
 
  console.log('Useffect Outside block :',msg)

  useEffect(()=>{
    console.log(' Inside useEffect :')
     setShow(true)

     setTimeout(()=>{
      setShow(false)
 },3000)

  },[msg])

  

  return (
    <Alert  variant="filled" style={style} severity="success">
        {msg}
    </Alert>
  )
}

export default Alertbox

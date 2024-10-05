import { useEffect, useState,FC } from 'react'
import Alert from '@mui/material/Alert';

import { alertProps } from './Structure';

const  Alertbox : FC<alertProps> = ({msg}) => {
 
  const [show,setShow] = useState<boolean>();
 
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

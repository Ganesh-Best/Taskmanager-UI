import { useState } from 'react'
import Navbar from './Components/Navbar'
import Mainarea from './Components/Mainarea'
import Signup from './Components/Signup'
import Signin from './Components/Signin';
import {Route,Routes,} from 'react-router-dom';

function App() {
  //@ts-ignore
  const userInfo   =   JSON.parse(localStorage.getItem('userInfo')) ;
    console.log('userinfo',userInfo);
    
  return <>
   <Routes>
      <Route path='/signup' element={<Signup/>} ></Route>
      <Route path='/signin' element={<Signin/>} ></Route>
      <Route path='/'       element={userInfo?<Mainarea/>:<Signin/>} ></Route>
   </Routes>
   </>
}

export default App

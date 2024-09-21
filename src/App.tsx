import { useState } from 'react'
import Navbar from './Components/Navbar'
import Mainarea from './Components/Mainarea'
import Signup from './Components/Signup'
import Signin from './Components/Signin';
import {Route,Routes,} from 'react-router-dom';

function App() {
  
  const userInfo :{name:string;email:string,token:string }|null  =   JSON.parse(localStorage.getItem('userInfo'))
    

  return <>
   {/* <Navbar/>
   <Mainarea/> */}

   <Routes>
      <Route path='/signup' element={<Signup/>} ></Route>
      <Route path='/signin' element={<Signin/>} ></Route>
      <Route path='/' element={userInfo?<Mainarea/>:<Signin/>} ></Route>
   </Routes>
   </>
}

export default App

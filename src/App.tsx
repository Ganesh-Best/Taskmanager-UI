import { useState } from 'react'
import Navbar from './Components/Navbar'
import Mainarea from './Components/Mainarea'
import Signup from './Components/Signup'
import Signin from './Components/Signin';
import {Route,Routes,} from 'react-router-dom';

function App() {
  return <>
   {/* <Navbar/>
   <Mainarea/> */}
   
   <Routes>
      <Route path='/signup' element={<Signup/>} ></Route>
      <Route path='/signin' element={<Signin/>} ></Route>
      <Route path='/todo' element={<Mainarea/>} ></Route>
   </Routes>
   </>
}

export default App

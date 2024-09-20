import React, { useEffect, useState } from 'react'
import { userInfo } from './Store/user';
import { useRecoilState } from 'recoil';

function useSetDetails() {

   const [success,setSuccess] = useState(false);
   const [userInfor ,setUserinfor] = useRecoilState(userInfo);
   
   useEffect(()=>{
     
       if(!userInfor?.name && !userInfor?.email && !userInfor?.token){
           const user  = JSON.parse(localStorage.getItem('userInfo'))
            
           console.log('user details :');
           if(user){
             setUserinfor({name:user.name,email:user.email,token:user.token})
           console.log('userDetails in useSetDetails hook :',userInfor);
           }

       }

     

   },[])
    
  
}

export default useSetDetails

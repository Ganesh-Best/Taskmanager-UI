import { useEffect} from 'react'
import { userInfo } from './Store/user';
import { useRecoilState } from 'recoil';
import { userInterface } from './Structure';

function useSetDetails() {

   const [userInfor ,setUserinfor] = useRecoilState(userInfo);
   
   useEffect(()=>{
     
       if(!userInfor?.name && !userInfor?.email && !userInfor?.token){
             const user : userInterface|null  =   localStorage.getItem('userInfo')?JSON.parse(localStorage.getItem('userInfo') as string )   : null ;
            
           console.log('user details :');
           if(user){
             setUserinfor({name:user.name,email:user.email,token:user.token})
           console.log('userDetails in useSetDetails hook :',userInfor);
           }

       }

     

   },[])
    
  
}

export default useSetDetails

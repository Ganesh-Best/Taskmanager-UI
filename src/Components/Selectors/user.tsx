import { userInfo } from "../Store/user";
import { selector  } from "recoil";

export const email =  selector({
    key:'email',
    get:({get})=>{
        let userDetails = get(userInfo);     
        return userDetails.email ;
    }
})
export const name =  selector({
    key:'name',
    get:({get})=>{
        let userDetails = get(userInfo);     
        return userDetails.name ;
    }
})

export const token =  selector({
    key:'token',
    get:({get})=>{
        let userDetails = get(userInfo);     
        return userDetails.token ;
    }
})
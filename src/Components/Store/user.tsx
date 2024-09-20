import { atom } from "recoil";

export const userInfo = atom({
    key:'userInfo',
    default:{
        name:'',
        email:'',
        token:'',
    }
})
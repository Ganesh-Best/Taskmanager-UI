import {atom}  from 'recoil';

export const todos = atom({
    key:'todos',
    default:[]
})
export const originalTodos = atom({
    key:'originalTodos',
    default:[]
})

export const searchQuery = atom({
    key:'searchQuery',
    default:''
})
import {atom}  from 'recoil';
import { todoInterface } from '../Structure'; 
export const todos = atom<todoInterface[]|[]>({
    key:'todos',
    default: []
})
export const originalTodos = atom<todoInterface[]|[]>({
    key:'originalTodos',
    default:[]
})

export const searchQuery = atom<string>({
    key:'searchQuery',
    default:''
})
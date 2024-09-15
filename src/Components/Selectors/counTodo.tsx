 import { selector } from "recoil";
 import { todos } from "../Store/todos";
 export const countTodo = selector({
    key:'countTodo',
    get:({get})=>{
     const TODOS  = get(todos);
     return TODOS.length;
    }
 })
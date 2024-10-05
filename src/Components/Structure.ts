export  interface alertProps {
    msg:string;
    key:number;
 }

export interface todoInterface {
    title:string;
    description:string;
    _id:string;
    completed?:boolean;
}

export interface userInterface {
    name: string;
    email: string;
    token: string;
}

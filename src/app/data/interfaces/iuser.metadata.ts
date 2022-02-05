import { ITypesParent } from "./itypesparent.metadata";

export interface IUser extends ITypesParent {
    username:string,
    password:string,
    nombre:string,
    apellidoP:string,
    apellidoM:string,
    email?:string,
    phone?:string,
    enabled:boolean,
    photo:string
    role:string
}
import { ITypesParent } from "./itypesparent.metadata";

export interface IContract extends ITypesParent {
    id:number,
    id_provider:number,
    id_dictamen?:number,
    numero?:string,
    duracion?:number,
    fecha_firma?:Date,
    fecha_venc?:Date,
    observ?:string
}
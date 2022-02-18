import { EnabledPipe } from "./enabled.pipe";
import { FullNamePipe } from "./full-name.pipe";
import { ListaRolesPipe } from "./lista-roles.pipe";
import { UndefinedPipe } from "./undefined.pipe";

export const pipes: any[] = [
    EnabledPipe,
    FullNamePipe,
    ListaRolesPipe,
    UndefinedPipe
]

export * from "./enabled.pipe";
export * from "./full-name.pipe";
export * from "./lista-roles.pipe";
export * from './undefined.pipe'
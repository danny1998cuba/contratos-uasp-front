import { ContractPipe } from "./contract.pipe";
import { EnabledPipe } from "./enabled.pipe";
import { FullNamePipe } from "./full-name.pipe";
import { ListaRolesPipe } from "./lista-roles.pipe";
import { NgModelErrorsTranslatePipe } from "./ng-model-errors-translate.pipe";
import { UndefinedPipe } from "./undefined.pipe";

export const pipes: any[] = [
    ContractPipe,
    EnabledPipe,
    FullNamePipe,
    ListaRolesPipe,
    NgModelErrorsTranslatePipe,
    UndefinedPipe
]

export * from './contract.pipe'
export * from "./enabled.pipe";
export * from "./full-name.pipe";
export * from "./lista-roles.pipe";
export * from "./ng-model-errors-translate.pipe";
export * from './undefined.pipe'
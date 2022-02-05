import { EnabledPipe } from "./enabled.pipe";
import { FullNamePipe } from "./full-name.pipe";
import { UndefinedPipe } from "./undefined.pipe";

export const pipes: any[] = [
    UndefinedPipe,
    EnabledPipe,
    FullNamePipe
]

export * from "./enabled.pipe";
export * from "./full-name.pipe";
export * from './undefined.pipe'
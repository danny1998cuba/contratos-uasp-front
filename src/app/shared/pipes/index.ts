import { EnabledPipe } from "./enabled.pipe";
import { UndefinedPipe } from "./undefined.pipe";

export const pipes: any[] = [
    UndefinedPipe,
    EnabledPipe
]

export * from "./enabled.pipe";
export * from './undefined.pipe'
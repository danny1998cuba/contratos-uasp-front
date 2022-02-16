import { LoaderComponent } from "./loader/loader.component";
import { ModalComponent } from "./modal/modal.component";
import { NCardComponent } from "./n-card/n-card.component";
import { TitleComponent } from "./title/title.component";

export const componets: any[] = [
    TitleComponent,
    NCardComponent,
    ModalComponent,
    LoaderComponent
]

export * from "./loader/loader.component";
export * from "./title/title.component";
export * from "./n-card/n-card.component";
export * from "./modal/modal.component"
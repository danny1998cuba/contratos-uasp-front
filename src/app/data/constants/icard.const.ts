import { Authenticated } from "src/app/core/utils";
import { ICardData } from "../interfaces";

export const CARDS_INFO: ICardData[] = [
    {
        title: "Proveedores",
        description: "Gestión de los proveedores de la Unidad",
        router_Link: "/gestion/providers",
        image: "assets/images/provider.png",
        small: "Solo para usuarios de tipo Contratador",
        enabled: "CONT"
    },
    {
        title: "Contratos",
        description: "Gestión de los contratos establecidos por la Unidad",
        router_Link: "/gestion/contracts",
        image: "assets/images/contract2.png",
        small: "Solo para usuarios de tipo Contratador",
        enabled: "CONT"
    },
    {
        title: "Usuarios",
        description: "Gestión de los usuarios del sistema.",
        router_Link: "/gestion/users",
        image: "assets/images/users.png",
        small: "Solo para usuarios de tipo Administrador",
        enabled: "ADMIN"
    }
]
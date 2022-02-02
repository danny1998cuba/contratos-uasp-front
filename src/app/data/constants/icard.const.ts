import { ICardData } from "../interfaces";

export const CARDS_INFO : ICardData[] = [
    {
        title : "Proveedores",
        description: "Gestión de los proveedores de la Unidad",
        router_Link: "/providers",
        image: "assets/images/provider.png"
    },
    {
        title : "Contratos",
        description: "Gestión de los contratos establecidos por la Unidad",
        router_Link: "/contract",
        image: "assets/images/contract2.png"
    },
    {
        title : "Usuarios",
        description: "Gestión de los usuarios del sistema.<br>",
        router_Link: "/users",
        image: "assets/images/users.png",
        small: "Solo para usuarios de tipo Administrador"
    }
]
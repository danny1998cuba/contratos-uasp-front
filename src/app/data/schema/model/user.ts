import { Rol } from ".."

export class User {
    id!: number
    username!: string
    password!: string
    nombre!: string
    apellidoP!: string
    apellidoM!: string
    email?: string
    telefono?: string
    enabled!: boolean
    rolesList!: Rol[]
}

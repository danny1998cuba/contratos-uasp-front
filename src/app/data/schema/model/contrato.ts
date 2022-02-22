import { Dictamen, Provider } from ".."

export class Contrato {
    id!: number
    numero?: string
    duracion?: number
    fechaFirma?: Date
    fechaVenc?: Date
    observaciones?: string
    idProveedor!: Provider
    idDictamen?: Dictamen
}

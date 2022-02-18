import { environment as env } from "src/environments/environment";

// Base Routes
const BASE_ROUTE = `${env.uri}contracts/api`

// Controllers Routes
export const GESTION_ROUTES = {
    PROVIDERS: `${BASE_ROUTE}/proveedor`,
    CONTRATO: `${BASE_ROUTE}/contrato`,
    DICTAMEN: `${BASE_ROUTE}/dictamen`,
    USERS: `${BASE_ROUTE}/users`,
    ROLES: `${BASE_ROUTE}/users/roles`
}
// Contratos filter params
export const FILTERS = {
    PROV: 'prov=',
    DICT: 'dict=',
    APROB: 'aprob='
}

// Connectors
export const CONNECTORS = {
    PARAMS: '?',
    AND: '&'
}
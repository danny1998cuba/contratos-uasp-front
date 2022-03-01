import { environment as env } from "src/environments/environment";

// Base Routes
const BASE_ROUTE = `${env.uri}api`

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
    APROB: 'aprob=',
    VIG: 'vig=',
    X_VENC: 'xVenc=',
    YEAR: 'year='
}

// Connectors
export const CONNECTORS = {
    PARAMS: '?',
    AND: '&'
}
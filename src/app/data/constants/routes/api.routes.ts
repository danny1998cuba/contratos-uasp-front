import { environment as env } from "src/environments/environment";

// Base Routes
const BASE_ROUTE = `${env.uri}`
const API_ROUTE = `${BASE_ROUTE}api`

export const LOGIN_ROUTES = {
    LOGIN: `${BASE_ROUTE}login`,
    LOGOUT: `${BASE_ROUTE}logout`,
    ACTIVE_USER: `${BASE_ROUTE}userAuth`
}

// Controllers Routes
export const GESTION_ROUTES = {
    PROVIDERS: `${API_ROUTE}/proveedor`,
    PROVIDERS_ALL: `${API_ROUTE}/proveedor/all`,
    CONTRATO: `${API_ROUTE}/contrato`,
    DICTAMEN: `${API_ROUTE}/dictamen`,
    USERS: `${API_ROUTE}/users`,
    ROLES: `${API_ROUTE}/users/roles`
}

export const PASS_ROUTE = `${GESTION_ROUTES.USERS}/pass`

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
import { STORAGE_KEYS } from "src/app/data/constants"
import { User } from "src/app/data/schema"

export abstract class Authenticated {

    static get getUserFromLS(): User | undefined {
        const item = localStorage.getItem(STORAGE_KEYS.USER)
        if (item)
            return JSON.parse(item)
        else
            return undefined
    }

    static get isAdmin(): boolean {
        const user = this.getUserFromLS
        if (user)
            return user.rolesList.filter(r => r.name == 'ADMIN').length != 0

        return false
    }

    static get isCont(): boolean {
        const user = this.getUserFromLS
        if (user)
            return user.rolesList.filter(r => r.name == 'CONT').length != 0

        return false
    }
}

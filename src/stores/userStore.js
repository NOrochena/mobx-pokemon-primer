import { observable, decorate } from 'mobx'

export class UserStore {
    firstName = "Nicholas"
    lastName = "Orochena"
}

decorate(UserStore, {
    firstName: observable,
    lastName: observable
})

export default new UserStore()
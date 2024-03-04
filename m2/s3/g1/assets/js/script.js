/* ESERCIZIO 1 */

class User {
    constructor(_firstName, _lastName, _age, _location) {
        this.firstName = _firstName
        this.lastName = _lastName
        this.age = _age
        this.location = _location
    }
    AgeDifference(utente) {
        let name1 = this.firstName
        let name2 = utente.firstName
        let age1 = this.age
        let age2 = utente.age
        if (age1 > age2) {
            console.log(`${name1} è più vecchio/a di ${name2}`)
        }
        else if (age1 === age2) {
            console.log(`${name1} ha la stessa età di ${name2}`)
        }
        else {
            console.log(`${name1} è più piccolo/a di ${name2}`)
        }
    }
}

const Utente1 = new User('Federico', 'Carcone', 24, 'Cervaro')
const Utente2 = new User('Spongebob', 'Squarepant', 24, 'Bikini Bottom')
const Utente3 = new User('Antonella', 'Faleri', 55, 'Cervaro')
const Utente4 = new User('Antonio', 'Carcone', 53, 'Cervaro')
const Utente5 = new User('Rick', 'Astley', 69, 'St Helen')

/* ESERCIZIO 2 */
/*
the main thing about modules is to import and export different sections of code
from different files into other files.
*/

export default class User {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

export function printName(user) {
    console.log(user.name)
}

export function printAge(user) {
    console.log(user.age)
}

// ways of export

// export { printName, printAge }
// export default User
// we can declare export default before declaration of class

// export default class User {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }
// }

// export function printAge(user) {
//     console.log(user.age)
// }

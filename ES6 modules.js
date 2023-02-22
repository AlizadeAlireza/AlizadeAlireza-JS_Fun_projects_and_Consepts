/*
the main thing about modules is to import and export different sections of code
from different files into other files.
*/

class User {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

function printName(user) {
    console.log(user.name)
}

function printAge(user) {
    console.log(user.age)
}

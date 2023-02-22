import { printAge, printName } from "./ES6 modules"
// import { printAge as printUserAge, printName } from "./ES6 modules" --> we can change the import name
import User from "./ES6 modules"

const user = new User("alireza", 22)
console.log(user)

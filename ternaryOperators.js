const number = 50
let result
let result1
// if (number >= 50) {
//     result = "Not to fifty!"
// } else {
//     result = "It could be worse"
// }

// another way

result = number >= 50 ? "Not to fifiy" : "It could be worse"

console.log(result)

/**
 * use this way because it's more explicit
 */
const user = {}

if (userLeft.valid) {
    user.save()
} else {
    user.printErrors()
}

// another example
if (number === 0) {
    result = "You have nothing"
} else if (number < 10) {
    result = "You have very little"
} else {
    result = "You have a lot"
}

// into ternary
// but this ternary code is also bad for understanding
result1 =
    number === 0
        ? "You have nothing"
        : number < 10
        ? "You have very little"
        : "You have a lot"
console.log(result1)

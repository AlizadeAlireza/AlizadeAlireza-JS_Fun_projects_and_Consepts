let myName = "alireza"

function printName() {
    console.log(myName)
}

myName = "ali"

printName()

myName = "hasan"

printName()

/**
 * we can call a variable outside of a function inside of that function
 * that we call it cloture.
 *
 * whatever the most recent value of that variable is.
 */

function outerFunction(outerVariable) {
    const outer2 = "Hi"
    return function innerFunction(innerVariable) {
        console.log("Outer Variable: " + outerVariable)
        console.log("Inner Variable: " + innerVariable)
    }
}
const newFunction = outerFunction("outside")
newFunction("inside")

/**
 * every thing in outer function is available in inner function
 */

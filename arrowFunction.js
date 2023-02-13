// function already create a variable of the sum in this case
function sum(a, b) {
    return a + b
}

let sum2 = (a, b) => a + b // no brackets and no return statements so retrun

function isPositive(number) {
    return number >= 0
}

// when we have a single parameter we can remove the parentheses
let isPositive2 = (number) => number >= 0

function randomNumber() {
    return Math.random
}

let randomNumber2 = () => Math.random

document.addEventListener("click", function () {
    console.log("click")
})

document.addEventListener("click", () => console.log("click"))

// this is just for the test

<<<<<<< HEAD
=======
console.log("this is for test")
>>>>>>> 9941efa (test)

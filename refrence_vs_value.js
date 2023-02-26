let a = 10
let b = "hi"
let c = a
c = c + 1 // c is updated but the a value is like the past
let d = [1, 2]
let e = d
let h = [4, 5, 6]
/*
 when we add a value to the e list the d array 
 because they're address is like each other.
*/
e.push(3)
h.push(7)

// they are true because their have same address
let m = [1, 2]
let q = m
console.log(`m === q ${m === q}`)
console.log(`m == q ${m == q}`)

// they are false because their haven't same address
let n = [1, 2]
let g = [1, 2]
console.log(`n === g ${n === g}`)
console.log(`n == g ${n == g}`)

console.log(`a = ${a}`)
console.log(`b = ${b}`)
console.log(`c = ${c}`)
console.log(`d = ${d}`)
console.log(`e = ${e}`)
console.log(`h = ${h}`)

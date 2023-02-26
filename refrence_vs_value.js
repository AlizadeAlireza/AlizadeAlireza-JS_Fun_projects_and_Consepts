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
console.log(`m === q ${m === q}`) // 0x01
console.log(`m == q ${m == q}`) // 0x01

// they are false because their haven't same address
let n = [1, 2]
let g = [1, 2]
console.log(`n === g ${n === g}`) // 0x01
console.log(`n == g ${n == g}`) // 0x02

console.log(`a = ${a}`)
console.log(`b = ${b}`)
console.log(`c = ${c}`)
console.log(`d = ${d}`)
console.log(`e = ${e}`)
console.log(`h = ${h}`)

function add(array, element) {
    array.push(element)
    // array = [element]
}
add(d, 3)
/* 
if we set array = [element] --> doesn't show any added value in our array
because with that work we create a new array with 0x02 memory address

if we change it to const variable we still able to do push in our array
*/

const items = [
    { name: "Bike", price: 100 },
    { name: "TV", price: 200 },
    { name: "Album", price: 10 },
    { name: "Book", price: 5 },
    { name: "Phone", price: 500 },
    { name: "Computer", price: 1000 },
    { name: "Keyboard", price: 25 },
]

/*
filter method ---> just takes a single function witch is going to have one parameter
*/

const filteredItems = items.filter((item) => {
    return item.price <= 100
})

console.log(`this items filtered by the value of under 100 ${filteredItems}`)
console.log(filteredItems)

/* 
map --> allows us to take one array and convert it into new array 
*/

const itemNames = items.map((item) => {
    return item.name
    // return item.price
})

console.log(itemNames)

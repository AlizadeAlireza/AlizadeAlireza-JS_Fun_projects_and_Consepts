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
map method--> allows us to take one array and convert it into new array 
get just only one parameter
*/

const itemNames = items.map((item) => {
    return item.name
    // return item.price
})

console.log(itemNames)

/* 
find method ---> allows us to find a single object in an array
*/

const foundItem = items.find((item) => {
    return item.name === "TV"
})

console.log(foundItem)

/* 
for each method ---> this method does not actually return any thing 
*/

items.forEach((item) => {
    console.log(item.name)
    console.log(item.price)
})

/* 
some method ---> this method just return true or false 
if the item is available or not
*/

const hasInexpensiveItems = items.some((item) => {
    return item.price <= 100
})

console.log(hasInexpensiveItems)

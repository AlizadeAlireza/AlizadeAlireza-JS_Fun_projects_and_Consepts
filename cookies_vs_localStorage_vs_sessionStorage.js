// first item --> key, second item --> value
localStorage.setItem("name", "alireza")
localStorage.setItem("family", "alizade")
// remove item
localStorage.removeItem("name")
console.log(localStorage.getItem("name")) // will be null

// local storage
// first item --> key, second item --> value
localStorage.setItem("name", "alireza")
localStorage.setItem("family", "alizade")
// remove item
localStorage.removeItem("name")
console.log(localStorage.getItem("name")) // will be null

// session storage
sessionStorage.setItem("name", "alireza")
// for update we use the same key with the different value
session.sessionStorage.setItem("name", "mohammad")
console.log(sessionStorage.getItem("name"))

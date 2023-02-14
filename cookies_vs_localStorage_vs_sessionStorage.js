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
sessionStorage.setItem("name", "mohammad")
console.log(sessionStorage.getItem("name"))

// cookie storage
// for other section of our cookie we use ;
document.cookie = "name=alirza; expires=" + new DATE(2020, 0, 1).toUTCString()
document.cookie =
    "last_name=alizade; expires=" + new DATE(2020, 0, 1).toUTCString()

console.log(document.cookie)

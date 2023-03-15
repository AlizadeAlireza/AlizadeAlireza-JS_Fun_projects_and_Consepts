const grandparent = document.querySelector(".grandparent")
const parent = document.querySelector(".parent")
const child = document.querySelector(".child")

/**
 * the first parameter is the type of event that we want
 * the next parameter is callback that runs every single time
 * that the event is fired. --> in our case clicked.
 * target in console -> the thing that clicked on
 */
grandparent.addEventListener("click", (e) => {
    // console.log(e)
    // console.log(e.target)
    console.log("Grandparent 1")
})

grandparent.addEventListener("click", (e) => {
    console.log("Grandparent 2")
})

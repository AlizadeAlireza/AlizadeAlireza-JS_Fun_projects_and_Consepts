const grandparent = document.querySelector(".grandparent")
const parent = document.querySelector(".parent")
const child = document.querySelector(".child")

/**
 * the first parameter is the type of event that we want
 * the next parameter is callback that runs every single time
 * that the event is fired. --> in our case clicked.
 * target in console -> the thing that clicked on
 */
grandparent.addEventListener(
    "click",
    (e) => {
        // console.log(e)
        // console.log(e.target)
        console.log("Grandparent capture")
    },
    { capture: true }
)
grandparent.addEventListener("click", (e) => {
    console.log("Grandparent bubble")
})

parent.addEventListener("click", (e) => {
    console.log("parent")
})

child.addEventListener("click", (e) => {
    console.log("childe")
})
// when we click on child it's like we clicked on the all buttons
// and work with the closest element.

/**
 * capture starts on the outside and moves in
 * but the bubbling starts from inside
 */

document.addEventListener("click", (e) => {
    console.log("document bubble")
})

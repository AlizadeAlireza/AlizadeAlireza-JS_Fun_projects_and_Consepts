let body = document.body
// body.append("Hello dear ")
// body.appendChild() --> just can append element tags

const div = document.createElement("div")
// div.innerText = "Hello World" ---> just the visible items
// and show just like on the html page

div.textContent = "Hello World2" // ---> all items dispite hidden elements
// show like html file, copy it and paste it.

/* for render html we can use innerHtml */
// div.innerHtml = "<strong>Hello World 2"</strong>
const strong = document.createElement("strong")
strong.innerText = "Hello World 2"
div.append(strong)
body.append(div)

/** REMOVE */
strong.remove()
div.append(strong)

spanHi = document.querySelector("#hi")
spanBye = document.querySelector("#bye")

console.log(spanHi.getAttribute("title"))
//or
console.log(spanHi.title)

// set attribute
spanHi.setAttribute("title", "alireza")
console.log(spanHi.setAttribute("title", "alireza"))
//or
console.log((spanHi.id = "alireza"))

// remove attribute
spanHi.removeAttribute("title")

// set data sets
console.log(spanHi.dataset.test)

spanBye.dataset.newName = "this is for the Bye"

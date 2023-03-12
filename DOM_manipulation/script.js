let body = document.body
// body.append("Hello dear ")
// body.appendChild() --> just can append element tags

const div = document.createElement("div")
// div.innerText = "Hello World" ---> just the visible items
// and show just like on the html page
div.textContent = "Hello World" // ---> all items dispite hidden elements
// show like html file, copy it and paste it.

body.append(div)

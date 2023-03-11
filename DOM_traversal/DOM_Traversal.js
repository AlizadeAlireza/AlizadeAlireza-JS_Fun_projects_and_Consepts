// const grandparent = document.getElementById("-id")

/*
we get error because getElementsByClassName give us a collection.for using forEach method
we can convert it in an array.
*/
const parents = document.getElementsByClassName("parent")
parents.forEach(changeColor)

// query selector can use one element
// const grandparent = document.querySelector("#grandparent-id")
const grandparent = document.querySelector(".grandparent-id")

const parents1 = document.querySelectorAll(".parent")
parents.forEach(changeColor)

changeColor(grandparent)

// select a query from another
const parents2 = Array.from(grandparent.children)

// want children inside first parents
parentOne = parents[0]
const children = parentOne.children
changeColor(children[0])

function changeColor(element) {
    element.style.backgroundColor = "#333"
}

// we can use DOM over documents
const child1 = grandparent.querySelector(".child")

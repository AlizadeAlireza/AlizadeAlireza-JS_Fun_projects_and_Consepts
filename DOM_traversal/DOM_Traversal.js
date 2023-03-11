// const grandparent = document.getElementById("-id")

/*
we get error because getElementsByClassName give us a collection.for using forEach method
we can convert it in an array.
*/
const parents = document.getElementsByClassName("parent")
parents.forEach(changeColor)

// query selector can use one element
const grandparent = document.querySelector("#grandparent-id")

changeColor(grandparent)

function changeColor(element) {
    element.style.backgroundColor = "#333"
}

const grandparent = document.getElementById("grandparent-id")

/*
we get error because getElementsByClassName give us a collection.for using forEach method
we can convert it in an array.
*/
const parents = document.getElementsByClassName("parent")
parents.forEach(changeColor)

changeColor(grandparent)

function changeColor(element) {
    element.style.backgroundColor = "#333"
}

const favoriteAnimal = "cat"

// if (favoriteAnimal === "cat") {
//     console.log("Cats are great")
// } else if (favoriteAnimal === "dog") {
//     console.log("Dogs are kinda loud")
// } else if (favoriteAnimal === "shark") {
//     console.log("That's an interesting choice")
// } else {
//     console.log("I have never heard of that animal")
// }

/*
if a statement is true, the code will be run for another
statements.
for this situation if we want to finish the executation,
we can use <break>
*/

switch (favoriteAnimal) {
    case "cat":
        console.log("cats are great")
        break
    case "dog":
        console.log("dogs are so smart!")
        break
    case "shark":
        console.log("sharks are dangerous")
        break
}

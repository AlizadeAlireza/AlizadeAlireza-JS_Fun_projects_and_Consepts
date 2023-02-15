let p = new Promise((resolve, reject) => {
    let a = 1 + 1
    if (a == 2) {
        resolve("Success")
    } else {
        reject("failed")
    }
})

//anything inside of then, is going to run for resolve.
// resolve("Success") ---> our parameter for this function is message
p.then((message) => {
    console.log("this is in the then " + message)
})

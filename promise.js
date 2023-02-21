let p = new Promise((resolve, reject) => {
    let a = 1 + 2
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
}).catch((message) => {
    console.log("this is in the catch " + message)
})

// another example of Promise
const userLeft = false
const userWatchingCatMeme = false

function watchTutorialCallback(callback, errorCallback) {
    if (userLeft) {
        errorCallback({
            name: "User Left",
            message: ":(",
        })
    } else if (userWatchingCatMeme) {
        errorCallback({
            name: "User Watching Cat Meme",
            message: "alireza < Cat",
        })
    } else {
        callback("Thumbs up and Subscribe")
    }
}

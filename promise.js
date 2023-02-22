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

watchTutorialCallback(
    (message) => {
        console.log("Success: " + message)
    },
    (error) => {
        console.log(error.name + " " + error.message)
    }
)

// implement promises instead of callback

function watchTutorialPromise() {
    return new Promise((resolve, reject) => {
        if (userLeft) {
            reject({
                name: "User Left",
                message: ":(",
            })
        } else if (userWatchingCatMeme) {
            reject({
                name: "User Watching Cat Meme",
                message: "alireza < Cat",
            })
        } else {
            resolve("Thumbs up and Subscribe")
        }
    })
}

watchTutorialPromise()
    .then((message) => {
        console.log("Success: " + message)
    })
    .then((message) => {
        console.log("Success: " + message)
    })
    .catch((error) => {
        console.log(error.name + " " + error.message)
    })

console.log("example three \n\n\n")
// another example of promises

// all this run parallel at the same time

/*
promise.all is going to run every single one of these promises 
and as soon as it's done it is then going to call the .then() and .catch()
*/

const recordVideoOne = new Promise((resolve, reject) => {
    resolve("Video 1 Recorded")
})

const recordVideoTwo = new Promise((resolve, reject) => {
    resolve("Video 2 Recorded")
})

const recordVideoThree = new Promise((resolve, reject) => {
    resolve("Video 3 Recorded")
})

Promise.all([recordVideoOne, recordVideoTwo, recordVideoThree]).then(
    (messages) => {
        console.log(messages)
    }
)

/* 
promise.race is like promise.all except it'll return as soon as the first one is completed
instead of waiting for everything to complete.
so it'll return just one message
*/
console.log("promise.race \n\n\n\n")
Promise.race([recordVideoOne, recordVideoTwo, recordVideoThree]).then(
    (messages) => {
        console.log(messages)
    }
)

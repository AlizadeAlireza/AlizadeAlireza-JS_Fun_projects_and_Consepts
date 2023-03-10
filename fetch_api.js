fetch("https://reqres.in/api/users", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        name: "user1",
    }),
})
    .then((response) => {
        return response.json()
    })
    .then((data) => console.log(data))
    .catch((error) => console.log("ERROR"))

/*
for fetch we need to set header and and tell fetch we're going to be passing
JSON

1. set the header to the correct content type of application JSON.
2. need to stringify to body
*/

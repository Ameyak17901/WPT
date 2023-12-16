const express = require("express")
const app = express()

app.get('/', (request, response) => {
    response.send("OK")
})

app.get('/data', (request, response) => {
    response.send({ name: "Ameya", age: 22 })
})

app.listen(5000, () => {
    console.log("app listening on 5000")
})
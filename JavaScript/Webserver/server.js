
const express = require("express")
const reverse = require('./library1')
const path = require('path')


const app = express();
app.get('/', (request, response) => {
    return response.send('OK')
});

app.get('/data', (request, response) => {
    return response.send('Hi from server')
});

app.get('/greet/:uname', (request, response) => {
    let x = request.params.uname;
    return response.send(`Hi, ${x}`);
})




app.listen(5000, () => {
    console.log("App listening to port 5000")
})



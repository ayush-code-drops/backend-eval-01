const express = require('express');
const app = express();
const port = 8000;

//Get Request for /books Route

app.get('/books', (req, res, next) => {
    console.log('books route');
    res.send('This is Books Page')
})
//Get Request for /libraries Route

app.get('/libraries', (req, res, next) => {
    console.log('Libraries Route');
    res.json({"route":req.url,"permission":true})
})
//Get Request for /authors Route

app.get('/authors', (req, res, next) => {
    console.log('Authors route');
    res.json({"route":req.url,"permission":true})
})

//Get Request for / -->home Route
app.get('/', (req, res, next) => {
    console.log('Home route');
    res.send('This is Home Page')
})

//Listening to Server

app.listen(port)



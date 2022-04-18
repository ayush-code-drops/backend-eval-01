const express = require('express');
const app = express();
const port = 8000;

//Logger Middleware

const logger = (req, res, next) => {
    const date=new Date().toTimeString()
    console.log(`logged at ${date} for the Request path -> ${req.url}`)
    next()
}

//using Logger middleware in the app
app.use(logger)

//Checking Permission Middleware 

const checkPermission = (Route) => {
    return (req, res, next) => {
        console.log('In checkPermission middleware');
        if (req.url == Route) {
           console.log('Permission Granted! Route is same as requested');
        }
        else {
            console.log('Permission Not Granted! Route is different from the requested path');
        }
    next()
  }  
}

//Get Request for /books Route

app.get('/books', (req, res, next) => {
    console.log('books route');
  res.json({route:req.url})
})
//Get Request for /libraries Route

app.get('/libraries',checkPermission('/libraries'), (req, res, next) => {
    console.log('Libraries Route');
    res.json({"route":req.url,"permission":true})
})
//Get Request for /authors Route

app.get('/authors', checkPermission('/authors'), (req, res, next) => {
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



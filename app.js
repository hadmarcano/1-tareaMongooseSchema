// Generic import
const express = require('express');
const mongoose = require('mongoose');
const expressValidator = require('express-validator');
require('dotenv').config();


// Import Routes

// App

const app = express();

// Database connection

mongoose.connect(process.env.DATABASE,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(db => console.log('DB is connected'))
.catch(error => console.log(error));

// Middlewares

app.use(expressValidator());

// Routes Middlewares


// App Listen

const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`The server is listening on port ${port}`);
});




const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const PORT = 3000;

const linkRoute = require('./routes/linkRoute');

mongoose.connect('mongodb://localhost/links', { useNewUrlParser: true, useUnifiedTopology: true}, (error,db) => {
    console.log("Success");  
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'templates'));

app.use('/', linkRoute);

app.listen(PORT, ()=>{
    console.log("Running");
});
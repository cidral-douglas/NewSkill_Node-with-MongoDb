const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

const linkRoute = require('./routes/linkRoute');

// let link = new Link({
//     title: "progbr",
//     description: "Link para o Site",
//     url: "https://programadorbr.com"
// });

// link.save().then(doc=>{console.log(doc)}).catch(err=>{console.log(err)});

mongoose.connect('mongodb://localhost/links', { useNewUrlParser: true, useUnifiedTopology: true}, (error,db) => {
    console.log("Success");  
});

app.use('/', linkRoute);

app.listen(PORT, ()=>{
    console.log("Running");
});
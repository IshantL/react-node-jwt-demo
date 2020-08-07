const express = require('express');
const bodyParser = require('body-parser');
const jwt =require('jsonwebtoken');
const moongose = require('mongoose');

const app = express();

app.listen(process.env.PORT || 8080);
app.get('/server/home', (req,res)=>{
 res.send("Welcome");
})
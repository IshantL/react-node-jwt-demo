const express = require('express');
const bodyParser = require('body-parser');
const jwt =require('jsonwebtoken');
const moongose = require('mongoose');
const User = require('./models/User');

const app = express();
app.use(bodyParser.json({}))
app.use(bodyParser.urlencoded({ extended: true }));

const secret = 'jwtdemo';

const mongo_uri="mongodb://localhost/react-jwt";
moongose.connect(mongo_uri,{  useNewUrlParser: true },((err)=>{
    if(err){
        throw err;
    }
    else{
        console.log("Successfully connected");
    }
}))
app.listen(process.env.PORT || 8080);
app.get('/server/home', (req,res)=>{
 res.send("Welcome");
});


app.post('/server/auth', (req,res)=>{
    const {email,password} = req.body;
    User.findOne({email},(err,user)=>{
        if(err){
            res.status(500).send("Internal error");
        }else if(!user){
            res.status(401).send("Incorect email");
        }else{
            user.isCorrectPassword(password,(err,right)=>{
                if(err){
                    res.status(500).send("Internal error");
                }else if(!right){
                    console.log(right);
                    res.status(401).send("Incorect email or password");
                }else {
                    // Issue token
                    const payload = { email };
                    const token = jwt.sign(payload, secret, {
                      expiresIn: '1h'
                    });
                    console.log("tokenLL",token);
                   // res.cookie('token', token, { httpOnly: true }).sendStatus(200);
                   res.json({
                    token: token
                    });
                }

            })
        }
    })
   
})

const chkToken = (req,res,next)=>{
    const token =  req.body.token ||
    req.query.token ||
    req.headers['x-access-token'] 
    console.log("OOhre",token)
    if(!token){
        res.status(401).send('Unauthorised');
    }else{
        console.log("hre",token)
        jwt.verify(token,secret,(err,success)=>{
            console.log("error",err);
            if(err){
                res.status(401).send('Unauthorised');
            }else{
                req.email = success.email;
                next();
            }

        })
    }
}
app.get('/checktoken',chkToken,(req,res)=>{
    res.sendStatus(200);
})

app.post('/server/register', (req,res)=>{
    const {email,password} = req.body;
    let user = new User({email,password});
    user.save((err)=>{
        if(err){
            res.status(500).send("Internal error");
        }
        else{
            res.status(200).send("Inserted");
        }
    })
})

app.get('/server/secret', chkToken, function(req, res) {
    res.send('Welcome to Secret Component from Server');
  });
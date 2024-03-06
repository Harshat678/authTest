const express = require('express')
const Users = require('../models/User')
exports.loginGET = (req,res)=>{
    res.send(
        '<form action="/login" method="POST"><label for="username">Username:</label><input type="text" id="username" name="username"><br><br><label for="password">Password:</label> <input type="password" id="password" name="password"><br><br><button type="submit">Login</button></form>'
    )

}

exports.loginPOST = (req,res)=>{
    const {username,password}= req.body;
    Users.findOne({username:username}).then(
        (user)=>{
            if(username===user.username && password===user.password){
                res.redirect('/home')
            }
            else{
                res.send('invalid password')
            }
        }
    )
    

}


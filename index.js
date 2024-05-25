const { query } = require('express');
const express = require('express')
const mysql = require('mysql')
const app = express();
const con = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'demtop'
})
app.set('view engine', 'ejs');
app.get('/',(req, res)=>{
    res.render('index',{
        name : req.query.name3
    })
})

app.listen(3001 ,()=>{
    console.log('Connected')
})
const express = require('express')
const mysql = require('mysql')

//Create connection to MYSQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', 
    password: '',
})

//Connect to MYSQL
db.connect((err) => {
    if(err) {
        throw err
    }
    console.log('MySQL Connected')
});

const app = express()

//Create DataBase
app.get('./createdb', (req, res) => {
    let sql = "CREATE DATABASE nodemysql";
    db.query(sql, (err) => {
        if (err) {
            throw err;
        }
        res.send("Databse Created");
    });
});
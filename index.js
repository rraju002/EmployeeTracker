const express = require('express')
const mysql = require('mysql')

//Create connection to MYSQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', 
    password: '',
    databse: 'nodemysql'
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
//Create Table
app.get('./createemployee', (req, res) => {
    let sql = 'CREATE TABLE employee(id int AUTO_INCREMENT, name VARCHAR(255), PRIMARY KEY(id)'
    db.query(sql ,err => {
        if(err) {
            throw err;
        }
        res.send("Database Created")
    });
});

//Insert employee
app.get('/employee1', (req, res) => {
    let post = {
        name: 'Rhowen Raju',
        designation: 'CEO'
    }
    let sql = 'INSERT INTO employee SET ?'
    let query = db.query(sql, post, err => {
        if(err) {
            throw err
        }
        res.send('Employee Added')
    })
})

//Select Employee
app.get('./getemployee', (req, res) => {
    let sql = 'SELECT * FROM employee'
    let query = db.query(sql, (err, results) => {
        if(err) {
            throw err
        }
        console.log(results)
        res.send('Employee details received')
    })
} )

app.listen('3000', () => {
    console.log('Server Started on Port 3000')
})
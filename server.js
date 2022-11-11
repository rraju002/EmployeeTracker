const inquirer = require("inquirer");
const sqlDatabase = require("./index")
const db = require("./index")

//Connect to mysql
const connection = mysql.createConnection({
    host: 'localhost',
    //Port Connection
    port: 3000,

    //Username
    user: 'Rhowen',

    //Password
    password: 'Team7',
    database: ''
})

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    console.log(`
    ╔═══╗─────╔╗──────────────╔═╗╔═╗
    ║╔══╝─────║║──────────────║║╚╝║║
    ║╚══╦╗╔╦══╣║╔══╦╗─╔╦══╦══╗║╔╗╔╗╠══╦═╗╔══╦══╦══╦═╗
    ║╔══╣╚╝║╔╗║║║╔╗║║─║║║═╣║═╣║║║║║║╔╗║╔╗╣╔╗║╔╗║║═╣╔╝
    ║╚══╣║║║╚╝║╚╣╚╝║╚═╝║║═╣║═╣║║║║║║╔╗║║║║╔╗║╚╝║║═╣║
    ╚═══╩╩╩╣╔═╩═╩══╩═╗╔╩══╩══╝╚╝╚╝╚╩╝╚╩╝╚╩╝╚╩═╗╠══╩╝
    ───────║║──────╔═╝║─────────────────────╔═╝║
    ───────╚╝──────╚══╝─────────────────────╚══╝`)
    // runs the app
    firstPrompt();
});

//Main Menu
const menu = [
    {
        type: "list",
        name: "first_name",
        message: "What is the shinobi's first name?"
    }

]

//Add employee
const addDepartment = [
    {
        type: "input",
        message: "What department does this shinobi work for?",
        name: "newDepartment",
    }
]

//Add Role
const addRole = [{
    type: "input",
    message: "What kind of shinobi is this?",
    name: "newRole",
},
{
    type: "input",
    message: "How much does this shinobi make?",
    name: "newRoleSalary",
},
{
    type: "input",
    message: "What department does this shinobi belong to?",
    name: "newRoleDepartment",
},
]
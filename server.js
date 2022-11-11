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

//Add Shinobi
const addShinobi = [
    {
        type: "input",
        message: "What is the shinobi's first name?",
        name: "shinobiFirstName",
    },
    
    {
        type: "input",
        message: "What is the shinobi's last name?",
        name: "shinobiLastName",
    },

    {
        type: "list",
        message: "What is the shinobi's role?",
        choices: ["Battle Shinobi", "Medical Shinobi", "Office Shinobi"],
        name:"shinobiRole"
    },
    {
        type: "list",
        message: "Who is Hokagee?",
        choices: ["Kakashi Hatake", "Lady Tsunade", "Naruto Uzumaki", "None" ],
        name: "shinobiManager",
    },
]

//Intialize Func
async function init() {
    let appRunning = true;
    let userMenuPick = await inquirer.prompt(menu).then(data => {
      return data.menu
    });

//App Continues to Run
while (appRunning) {
    switch (userMenuPick) {
        case "View all Shinobi departments":
            console.log("View all Shinobi departments")
            appRunning = false
            break;
            case "View all roles":
                appRunning = false
                break;
                case "View all Shinobi":
                    console.log("View all Shinobi")
                    appRunning = false
                    break;
                    case "Exit":
                        console.log('exit')
                        appRunning = false
  }
 }
}

init()
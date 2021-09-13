const mysql = require("mysql");
const inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
// The port; if not 8080
    port: process.env.PORT || 8080,
// Username
    user: "root",
// Password
    password: "Kazkillz925!",
    database: "employee_tracker_DB",
    });
 
  askQuestions();

function askQuestions() {
    inquirer.prompt({
        message: "What would you like to do?",
        type: "list",
        choices: [
            "View all employees",
            "View employees by manager",
            "View all departments",
            "View all roles",
            "Add employee",
            "Add department",
            "Add role",
            "Update employee role",
            "Update employee manager",
            "QUIT - I'm Done!",
        ],
        name: "choice",
    })
    .then((answers) => {
        console.log(answers.choice);
        switch (answers.choice) {
            case "view all employees":
                viewEmployees();
                break;
            case "view employees by manager":
                console.log("Answer to manager id number" + answers.choice);
                viewEmployeesByManager();
                break;
            case "view all departments":
                viewDepartments();
                break;
            case "view all roles":
                viewRoles();
                break;
            case "add employee":
                addEmployee();
                break;
            case "add department":
                addDepartment();
                break;
            case "add role":
                addRole();
                break;
            case "update employee role":
                updateEmployeeRole();
                break;
            case "update employee manager":
                updateEmployeeManager();
                break;
            default:
                connection.end();
                break;
            }
        });
    }

function viewEmployees() {
    connection.query("SELECT * FROM employee", function (err, data) {
    console.table(data);
    askQuestions();
    });
    }

function viewDepartments() {
    connection.query("SELECT * FROM department", function (err, data) {
    console.table(data);
    askQuestions();
    });
    }

function viewRoles() {
    connection.query("SELECT * FROM role", function (err, data) {
    console.table(data);
    askQuestions();
    });
    }

function addEmployee() {
    inquirer.prompt([
        {
            type: "input",
            name: "firstName",
            message: "What is the employees first name?",
        },
        {
            type: "input",
            name: "lastName",
            message: "What is the employees last name?",
        },
        {
            type: "number",
            name: "roleId",
            message: "What is the employees role ID",
        },
        {
            type: "number",
            name: "managerId",
            message: "What is the employees manager's ID?",
        },
    ])
    .then(function (res) {
        connection.query(
            "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)",
            [res.firstName, res.lastName, res.roleId, res.managerId],
            function (err, data) {
                if (err) throw err;
                console.table("Successfully Inserted");
                askQuestions();
            }
        );
    });
    }
function addDepartment() {
    inquirer.prompt([
        {
            type: "input",
            name: "department",
            message: "What is the department that you want to add?",
        },
    ])
    .then(function (res) {
        connection.query(
            "INSERT INTO department (name) VALUES (?)",
            [res.department],
            function (err, data) {
                if (err) throw err;
                console.table("Successfully Inserted");
                askQuestions();
            }
        );
    });
    }

function addRole() {
    inquirer.prompt([
        {
            message: "enter title:",
            type: "input",
            name: "title",
        },
        {
            message: "enter salary:",
            type: "number",
            name: "salary",
        },
        {
            message: "enter department ID:",
            type: "number",
            name: "department_id",
        },
    ])
    .then(function (response) {
        console.log("Called the connection function " + response);
        connection.query(
            "INSERT INTO role (title, salary, department_id) values (?, ?, ?)",
            [response.title, response.salary, response.department_id],
            function (err, data) {
                console.table(data);
            }
        );
        askQuestions();
    });
    }

function updateEmployeeRole() {
    inquirer.prompt([
        {
            message:
                "which employee would you like to update? (use first name only for now)",
            type: "input",
            name: "name",
        },
        {
            message: "enter the new role ID:",
            type: "number",
            name: "role_id",
        },
    ])
    .then(function (response) {
        connection.query(
            "UPDATE employee SET role_id = ? WHERE first_name = ?",
            [response.role_id, response.name],
            function (err, data) {
                console.table(data);
            }
        );
        askQuestions();
    });
    }

function updateEmployeeManager() {
    inquirer.prompt([
        {
            message:
                "which employee would you like to update? (use first name only for now)",
            type: "input",
            name: "name",
        },
        {
            message: "enter the new manager ID:",
            type: "number",
            name: "manager_id",
        },
    ])
    .then(function (response) {
        connection.query(
            "UPDATE employee SET manager_id = ? WHERE first_name = ?",
            [response.manager_id, response.name],
            function (err, data) {
                console.table(data);
            }
        );
        askQuestions();
    });
    }

function viewEmployeesByManager() {
    inquirer.prompt([
        {
            message: "Enter the manager ID to list Employees For:",
            type: "number",
            name: "manager_id",
        },
    ])
    .then(function (response) {
        connection.query(
            "SELECT * FROM employee WHERE manager_id = ?",
            [response.manager_id],
            function (err, data) {
                console.table(data);
                askQuestions();
            }
        );
    });
    }
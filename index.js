const inquirer = require('inquirer');
const db = require('./db/connection');

db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    beginQuestions();
});

const questions = [
    {
        type: 'list',
        name: 'initialQuestion',
        message: "What would you like to do?",
        choices: [
        'View all departments', 
        'View all roles', 
        'View all employees', 
        'Add a department', 
        'Add a role', 
        'Add an employee',
        'Update an employee role', 
        'Quit - I\'m done!']
    },
]

function beginQuestions() {
    inquirer.prompt(questions).then(function(data) {
        console.log(data);
        if (data.initialQuestion === 'view all departments') {
            console.log('view all Departments');
            viewAllDepartments();
        }
        else if (data.initialQuestion === 'view all roles') {
            console.log('view all roles');
            viewAllRoles();
        }
        else if (data.initialQuestion === 'view all employees') {
            console.log('view all employees');
            viewAllEmployees();
        }
        else if (data.initialQuestion === 'add a department') {
            console.log('add a department');
            addADepartment();
        }
        else if (data.initialQuestion === 'add a role') {
            console.log('add a role');
            addARole();
        }
        else if (data.initialQuestion === 'add an employee') {
            console.log('add a employee');
            addAnEmployee();
        }
        else if (data.initialQuestion === 'update an employee role') {
            console.log('update employee');
            updateEmployee();
        }
        else if (data.initialQuestion === 'Cancel') {
            console.log('Cancel');
        }
    })
};

function quitOrContinue() {
    inquirer.prompt([
        {
            type: 'confirm',
            name: 'addMore',
            question: "Would you like to continue?"
        }
    ]).then(function(data) {
        if(data.addMore === true) {
            beginQuestions();
        }
        else return;
    }); 
}; 

function viewAllDepartments() {
    db.query('SELECT * FROM department', function (err, results) {
        console.table(results);
    });
};
s
function viewAllRoles() {
    db.query('SELECT * FROM role', function (err, results) {
        console.table(results);
    });
};

function viewAllEmployees() {
    db.query('SELECT * FROM employee', function (err, results) {
        console.table(results);
    });
};

function addADepartment() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'addDepartment',
            message: "What department would you like to add?",
            validate: (input) => {
                if (input === '') {
                    return "Please make sure you enter the department you are trying to add here."
                }
                return true;
            }
        }
    ]).then(function(data) {
        console.log('data.addDepartment',data.addDepartment);
        db.query(`INSERT INTO department (name) values ("${data.addDepartment}")`,  function (err, results) {
            console.log("Successfully added new department.");
            viewAllDepartments();
        });
    })
};

function addARole() {
    viewAllDepartments();
    viewAllRoles();
    inquirer.prompt([
        {
            type: 'input',
            name: 'addRole',
            message: "What role would you like to add?",
            validate: (input) => {
                if (input === '') {
                    return "Please make sure you enter the role you are trying to add here."
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'roleSalary',
            message: "What is the salary for this role?",
            validate: (input) => {
                if (input === '') {
                    return "Please make sure you enter the salary for the role you are trying to add here."
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'addDepartmentID',
            message: "What is the department ID for the role you want to add?",
            validate: (input) => {
                if (input === '') {
                    return "Please make sure you enter the department ID for the role you are trying to add here."
                }
                return true;
            }
        }
    ]).then(function(data) {
        console.log('Add Role Data', data);
        db.query(`INSERT INTO role (title, salary, department_id) values ("${data.addRole}", ${data.roleSalary}, ${data.addDepartmentID})`,  function (err, results) {
            console.log("Successfully added new role.");
            viewAllRoles();
        });
    })
};

function addAnEmployee() {
    viewAllRoles();
    inquirer.prompt([
        {
            type: 'input',
            name: 'firstname',
            message: "What is the first name of the employee you would like to add?",
            validate: (input) => {
                if (input === '') {
                    return "Please make sure you enter the employee's first name you are trying to add here."
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'lastname',
            message: "What is the last name of the employee you would like to add?",
            validate: (input) => {
                if (input === '') {
                    return "Please make sure you enter the employee's last name you are trying to add here."
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'roleID',
            message: "What is the role ID for this new employee?",
            validate: (input) => {
                if (input === '') {
                    return "Please make sure you enter the employee's role ID here."
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'managerID',
            message: "What is manager ID for the new employee?",
            validate: (input) => {
                if (input === '') {
                    return "Please make sure you enter the employee's manager ID here."
                }
                return true;
            }
        }
    ]).then(function(data) {
        console.log('Add New Employee Data', data);
        db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) values ("${data.firstname}", "${data.lastname}", ${data.roleID}, ${data.managerID})`,  function (err, results) {
            console.log("Successfully added new employee.");
            viewAllEmployees();
        });
    });
};

//Update Employee
function updateEmployee() {
    viewAllRoles();
    viewAllEmployees();
    inquirer.prompt([
        {
            type: 'input',
            name: 'updateEmployeeID',
            message: "What is the ID of the employee you would like to update?",
            validate: (input) => {
                if (input === '') {
                    return "Please make sure you enter the employee ID you are trying to update here."
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'updateRole',
            message: "What is the role id you would like to update the employee information with?",
            validate: (input) => {
                if (input === '') {
                    return "Please make sure you enter the role ID for the employee you are trying to update here."
                }
                return true;
            }
        }
    ]).then(function(data) {
        db.query(`UPDATE employee SET role_id = "${data.updateRole}" WHERE id = "${data.updateEmployeeID}"`), function (err, results) {
            console.log("Employee successfully updated");
            viewAllEmployees();
        };
    });
};
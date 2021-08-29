//Required Modules
const inquirer = require('inquirer');
const fs = require('fs');

//Sources
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

//HTML Template
const pageTemplate = require('./lib/template');

//Leave Array Empty for Employee Form
const employeeArr = [];

//Validation of User Input
const validation = input => {
    if (input) {
        return true;
    }
    else {
        console.log("This question must be answered.");
    }
};

//Questions
const employeeApplication = [
    {
        type: 'input',
        name: 'teamName',
        message: 'What is the name of your team?',
        validation: validation
    },
    {
        type: 'input',
        name: 'employeeName',
        message: 'What is this employee\'s name?',
        validation: validation
    },
    {
        type: 'input',
        name: 'employeeID',
        message: 'What is your employee ID number?',
        validation: validation
    },
    {
        type: 'input',
        name: 'employeeEmail',
        message: 'What is your employee email address?',
        validation: validation
    },
    {
        type: 'list',
        name: 'position',
        message: 'What is the employee\'s position? Select from the following:',
        choices:
            () => {
                if (employeeArr.some(employee => employee.role === 'Manager')) {
                    return ['Engineer', 'Intern']
                } else {
                    return ['Manager', 'Engineer', 'Intern']
                }
            }
    },
    //Ask for Phone Number if Position is Manager
    {
        type: 'input',
        name: 'managerPhoneNumber',
        message: 'What is your manager\'s phone number?',
        when: ({ position }) => {
            if (position === 'Manager') {
                return true;
            } else {
                return false;
            }
        }
    },
    //Ask for Intern School
    {
        type: 'input',
        name: 'school',
        message: 'What school is this Intern attending?',
        when: ({ position }) => {
            if (position === 'Intern') {
                return true;
            } else {
                return false;
            }
        }
    },
    //Add A New Employee
    {
        type: 'confirm',
        name: 'addNewEmployee',
        message: 'Would you like to add another employee?',
        when: ({ newEmployee }) => {
            if (newEmployee === true) {
                console.log(`
                    ================
                    CREATE NEW EMPLOYEE 
                    ================
                    `);
            } else {
                return false;
            }
        }
    }
]

//initialize application
const promptStartQuestions = () => {
return inquirer.prompt(employeeApplication)
    .then(responseData => {
        employeeArr.push(responseData);
        if (responseData.addEmployee) {
            return promptStartQuestions();
        } else {
            return employeeArr;
        };
    });
};

//Write File to HTML
const tempCreation = (pageInfo) => {
    fs.writeFile('./dist/index.html', pageInfo, err => {
        if (err) {
            throw err
        };
        console.log('Team Profile created in dist folder!');
    })
};

promptStartQuestions()
    .then(groupInfo => cardTemplate(groupInfo))
    .then(completedHTML => tempCreation(completedHTML))
    .catch(err => console.log(err));
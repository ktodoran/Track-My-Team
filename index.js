//Required Modules
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const bodyTemplate = require('./src/template');
const createTemplate = require('./src/generate-page');

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
const managerQuestions = [
    {
        type: 'input',
        name: 'teamName',
        message: 'What is the name of your team?',
        validation: validation
    },
    {
        type: 'input',
        name: 'managerName',
        message: "Who is your Team Manager?",
        validation: validation
    },
    {
        type: 'input',
        name: 'managerId',
        message: "What is your managers' ID number?",
        validation: validation
    },

    {
        type: 'input',
        name: 'managerEmail',
        message: "What is your managers' email address?",
        validation: validation
    },
    {
        type: 'input',
        name: 'managerPhoneNumber',
        message: "What is your managers' phone number?",
        validation: validation
    }

];

//Start Questions Prompt
const promptStartQuestions = () => {
    return inquirer.prompt(managerQuestions)
}

const startEmployeeQuestions = employeeInfo => {
    if (!employeeInfo.employees) {
        employeeInfo.employees = [];
    }

    console.log(`
    ================
    CREATE NEW EMPLOYEE 
    ================
    `);

    return inquirer.prompt([
        {
            type: 'lsit',
            name: 'employeePosition',
            message: "What is this Employee's position?",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'employeeName',
            message: "What is this employee's name?",
            validation: validation
        },
        {
            type: 'input',
            name: 'employeeIdentification',
            message: "What is this employee's ID number?",
            validation: validation
        },
        {
            type: 'input',
            name: 'employeeEmail',
            message: "What is this employee's email address?",
            validation: validation
        },
        {
            type: 'input',
            name: 'employeeGitHub',
            message: "what is this employee's GitHub handle?",
            when: ({ employeeRole }) => {
                if (employeeRole === "Engineer") {
                    return true;
                }
                else {
                    return false;
                }
            },
            validation: validation
        },
        {
            type: 'input',
            name: 'employeeUniversity',
            message: 'Where is this employee attending school?',
            when: ({ employeeRole }) => {
                if (employeeRole === "Intern") {
                    return true;
                }
                else {
                    return false;
                }
            },
            validation: validation
        },
        {
            type: 'confirm',
            name: 'newEmployee',
            message: "Do you have another Team Member?",
            default: true
        }
    ])
        .then(employeeEntries => {
            employeeInfo.employees.push(employeeEntries)
            if (employeeInfo.employeeAdd) {
                return promptEmployeeQuestions(employeeInfo);
            }
            else {
                return employeeEntries
            }
        })
};

//initialize application
promptStartQuestions()
    .then(promptEmployeeQuestions)
    .then(employeeData => {
        const manager = new Manager(employeeInfo.managerName, parseInt(employeeInfo.managerId), employeeInfo.managerEmail, employeeInfo.managerOfficeNum);
        employeeArr.push(manager);
        employeeInfo.employees.forEach(element => {
            if (element.employeeRole === "Engineer") {
                const engineer = new Engineer(element.employeeName, parseInt(element.employeeId), element.employeeEmail, element.employeeGithub);
                employeeArr.push(engineer);
            }
            else if (element.employeeRole === "Intern") {
                const intern = new Intern(element.employeeName, parseInt(element.employeeId), element.employeeEmail, element.employeeSchool);
                employeeArr.push(intern);
            }
        })

        return bodyTemplate(employeeData.teamName, employeeArr);
    })
    .then(pageHTML => {
        return createTemplate(pageHTML);
    })
    .then(HTMLResponse => {
        console.log(HTMLResponse.message);
    })
    .catch(err => {
        console.log(err);
    });
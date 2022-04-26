const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');

const addNewEmployee = employees => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter employee name'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter employee ID number'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter employee email.'
        },
        {
            type: 'list',
            name: 'employeeType',
            choices: ['Manager', 'Engineer', 'Intern', 'Other'],
            message: 'Please select what employee type to add'
        }
    ])
    .then(employeeInfo => {
        switch (employeeInfo.employeeType) {
            case 'Manager':
                return addManager(employeeInfo);
            case 'Engineer':
                return addEngineer(employeeInfo);
            case 'Intern':
                return addIntern(employeeInfo);
            case 'Other':
                return addEmployee(employeeInfo);
        }
    })
    .then(employeeObject => {
        employees.push(employeeObject);
        return inquirer.prompt(
            {
                type: 'confirm',
                name: 'confirm',
                message: 'Add another employee?'
            }
        ).then(response => {
            if (response.confirm) {
                return addNewEmployee(employees);
            } else {
                return employees;
            }
        })
    })
};

const addManager = function (employee) {
    return inquirer.prompt(
        {
            type: 'number',
            name: 'officeNumber',
            message: "Please enter the manager's office number"
        }
    ).then(prompt => {
        return new Manager(employee.name, employee.id, employee.email, prompt.officeNumber);
    })
}

const addEngineer = function (employee) {
    return inquirer.prompt(
        {
            type: 'input',
            name: 'github',
            message: "Please enter the engineer's github username"
        }
    ).then(prompt => {
        return new Engineer(employee.name, employee.id, employee.email, prompt.github);
    })
}

const addIntern = function (employee) {
    return inquirer.prompt(
        {
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school"
        }
    ).then(prompt => {
        return new Intern(employee.name, employee.id, employee.email, prompt.school);
    })
}

const addEmployee = function (employee) {
    return new Employee(employee.name, employee.id, employee.email);
}

const generateHtml = function(employees) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Site</title>
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <p>
        ${JSON.stringify(employees)}
    </p>
</body>
</html>
`;
}

const writeFile = function(path, data) {
    fs.writeFile(path, data, err => {
        if (err) {
            throw new Error('File failed to save: ' + err);
        }
    
        return 'Save successful. Check "dist" folder for output';
    });
}


// const init = new Promise((resolve, reject) => {
//     resolve(addNewEmployee());
// })

addNewEmployee([])
    .then(employees => {
        console.log(employees)
        return generateHtml(employees);
    }).then(siteHtml => {
        return writeFile('./dist/index.html', siteHtml);
    }).then(() => {
        console.log('Save successful. Check "dist" folder for output.');
    }).catch(err => {
        console.log(err);
    })


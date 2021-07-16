// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        //input of title of project
        type: 'input',
        message: 'Please enter the title of your project',
        name: 'title',
    },
    {
        //input of description of project
        type: 'input',
        message: 'Please enter the description of your project',
        name: 'description',
    },
    {
        //input of install method
        type: 'input',
        message: 'Please enter your optimal install method',
        name: 'install',
    },
    {
        //input of install code
        type: 'input',
        message: 'Please enter an installation code example for your project (this can be left blank if not needed)',
        name: 'install_code',
    },
    {
        //input of usgae information
        type: 'input',
        message: 'Please enter the usage information',
        name: 'usage',
    },
    {
        //input of usage information
        type: 'input',
        message: 'Please enter a usage code example (this can be left blank if not needed)',
        name: 'usage_code',
    },
    {
        //chooose between licenses- list
        type: 'list',
        message: 'Please enter the license of your project',
        name: 'license',
        choices: [
            "None",
            "MIT License",
            "Apache Licnese 2.0",
            "Eclipse Public License 2.0",
            "Mozilla Public License 2.0",
        ]
    },
    {
        //input of test conditions
        type: 'input',
        message: 'Please enter the test conditions',
        name: 'test',
    },
    {
        //inpu ofcontributions
        type: 'input',
        message: 'Please enter the Contribution Guidelines',
        name: 'contribution',
    },
    {
        //input github username
        type: 'input',
        message: 'Please enter your Github username',
        name: 'github',
    },
    {
        //input email address
        type: 'input',
        message: 'Please enter your contact email address',
        name: 'email',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.md`, generateMarkdown(data), (err) =>
    err ? console.error("error") : console.log("success"))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((response) =>
        writeToFile("readme", response)
    );
}

// Function call to initialize app
init();

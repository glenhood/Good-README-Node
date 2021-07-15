// TODO: Include packages needed for this application
// Require generateMarkdown
// 
// TODO: Create an array of questions for user input
const questions = [
    {
    type: 'input',
    message: 'What is your user name?',
    name: 'username',
  },
  {
    type: 'password',
    message: 'What is your password?',
    name: 'password',
  },
  {
    type: 'password',
    message: 'Re-enter password to confirm:',
    name: 'confirm',
  },
});]

// inquirer.prompt(questions.then)
.then((response) =>
  response.confirm === response.password
    ? console.log('Success!')
    : console.log('You forgot your password already?!')
)];

.then((response)) ==> {
    fs.writeToFile("README.md", generateMarkDown({...response}), (err)
    // TODO: Describe how this ternary operator works
    err ? console.error(err) : console.log('success')
  );
}
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

// node modules
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

//import generateMardown.js
const generateMarkdown = require('./utils/generateMarkdown')

const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions =  () =>
inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the author of the project?',
      },
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Write a brief description of the project.',
      },
      {
        type: 'input',
        name: 'install',
        message: 'What are the steps required for installion?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'How can the project be used?',
      },
      {
        type: 'input',
        name: 'test',
        message: 'What tests have you written for this README?',
      },
      {
        type: 'list',
        name: 'contributors',
        message: 'Are you accepting contributors?',
        choices: ["Contributions are accepted", "Contributions are not accepted at this time"],
      },
      {
        type: 'input',
        name: 'contribute',
        message: 'How can people contribute (if contributions are not accepted leave blank)?',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email address.',
      },
      {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ["Apache-2.0", "MIT", "ISC", "GPL", "Artistic-2.0","wtfpl"],
      },

]);

questions()
    .then((data) => writeFileAsync('README.md', generateMarkdown(data)))
    .then(() => console.log('Successfully wrote to README.Md'))
    .catch((err) => console.error(err))

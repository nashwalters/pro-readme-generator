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
        message: 'Write a description of the project.',
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
        type: 'list',
        name: 'link',
        message: 'Do you have a link to add?',
        choices: ['Yes', 'No'],
    },
    {
        type: 'input',
        name: 'linkhref',
        message: 'What is the href of the link?',
        when: (data) => data.link === 'Yes'
    },
    {
        type: 'input',
        name: 'linklabel',
        message: 'What is the label of your link?',
        when: (data) => data.link === 'Yes'
    },
    {
        type: 'list',
        name: 'img',
        message: 'Do you want to add an image?',
        choices: ['Yes', 'No'],
    },
    {
        type: 'input',
        name: 'imgsrc',
        message: 'What is the src of the image?',
        when: (data) => data.img === 'Yes'
    },
    {
        type: 'input',
        name: 'imgalt',
        message: 'What is the alt text for the image?',
        when: (data) => data.img === 'Yes'
    },
    {
        type: 'list',
        name: 'tests',
        message: 'What tests have you written for this README?',
        choices: ['No tests were written', 'Tests were written'],
    },
    {
        type: 'input',
        name: 'testinfo',
        message: 'How are tests run (If no test were written leave blank)?',
        when: (data) => data.tests === 'Tests were written'
     },
    {
        type: 'list',
        name: 'contributors',
        message: 'Are you accepting contributors?',
        choices: ["Contributions are accepted", "Contributions are not accepted"],
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'How can people contribute?',
        when: (data) => data.contributors === 'Contributions are accepted'
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
    .then((data) => writeFileAsync('SampleREADME.md', generateMarkdown(data)))
    .then(() => console.log('Successfully wrote to SampleREADME.md'))
    .catch((err) => console.error(err))

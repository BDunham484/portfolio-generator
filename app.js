import inquirer from 'inquirer';
// import { writeFile } from 'fs';
// import { generatePage } from './src/page-template.js';

// const pageHTML = generatePage(userName, githubName);

// writeFile('./index.html', pageHTML, err => {
//     if (err) throw  err;

//     console.log('Portfolio complete! Check out index.html to see the output!');
// });

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'what is your name?'
        }
    ])
    .then(answers => console.log(answers));
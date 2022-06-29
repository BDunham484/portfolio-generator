// import inquirer from 'inquirer';
// console.log(inquirer);

import { writeFile } from 'fs';

const profileDataARgs = process.argv.slice(2, process.argv.length);
const [userName, githubName] = profileDataARgs;



import { generatePage } from './src/page-template.js';

// const generatePage = (userName, githubName) => {
//     return `
//     <!DOCTYPE html>
//     <html lang="en">
//         <head>
//             <meta charset="UTF-8">
//             <meta name="viewport" content="width=device-width, initial-scale=1.0">
//             <meta http-eqiv="X=UA-Compatible" content="ie=edge">
//             <title>Portfolio</title>
//         </head>

//         <body>
//             <h1>${userName}</h1>
//             <h2><a href="https://github.com/${githubName}">Github</a></h2>
//         </body>
//     </html>
//     `;
// };







writeFile('./index.html', generatePage(userName, githubName), err => {
    if (err) throw  err;

    console.log('Portfolio complete! Check out index.html to see the output!');
});


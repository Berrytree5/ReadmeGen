const fs = require('fs');
const inquirer = require('inquirer');

// Function to generate the README content
function generateREADME(answers) {
  return `# ${answers.title}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
[![License](https://img.shields.io/badge/License-${answers.license}-brightgreen.svg)](https://opensource.org/licenses/${answers.license})

This project is licensed under the ${answers.license} License.

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
GitHub: [${answers.github}](https://github.com/${answers.github})
Email: ${answers.email}
`;
}

// Prompt the user for input
inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Enter your project title:',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a project description:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter installation instructions:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter usage information:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license:',
      choices: ['MIT', 'Apache', 'GPL', 'ISC'],
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Enter contribution guidelines:',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Enter test instructions:',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub username:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address:',
    },
  ])
  .then((answers) => {
    // Generate the README content
    const readmeContent = generateREADME(answers);

    // Write the content to a README.md file
    fs.writeFileSync('README.md', readmeContent);

    console.log('README.md generated successfully!');
  });

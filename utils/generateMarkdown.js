// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // switch ie if mit license, return mit link
  switch (license) {
    case "MIT":
      return `This project is licensed under the MIT license.
![MIT Badge](https://img.shields.io/npm/l/f)`;
    case "Apache 2.0":
      return `This project is licensed under the Apache 2.0 license.
![Apache 2.0 Badge](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
    case "Boost 1.0":
      return `This project is licensed under the Boost 1.0 license.
![Boost 1.0 Badge](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)`;
    case "BSD 3":
      return `This project is licensed under the BSD 3 license.
![BSD 3 Badge](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)`;
    case "Eclipse 1.0":
      return `This project is licensed under the Eclipse 1.0 license.
![Eclipse 1.0 Badge](https://img.shields.io/badge/License-EPL%201.0-red.svg)`;
    default:
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return "";
  }
  return `## License`;
}

//THEN a high-quality, professional README.md is generated with the title
//of my project and sections entitled Description, Table of Contents,
//Installation, Usage, License, Contributing, Tests, and Questions
// TODO: Create a function to generate markdown for README
function generateMarkdown(readmeData) {
  return `# ${readmeData.name}

# Description
${readmeData.description}
  
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributions](#contributions)
* [Tests](#tests)
* [Credits](#credits)
* [Questions](#questions)


## Installation 
${readmeData.installation}

## Usage
(add images directory to attach screenshot here)
![alt text](assets/images/screenshot.png)

${readmeData.usage}

${renderLicenseSection(readmeData.license)}
    ${renderLicenseLink(readmeData.licenseChoices)}

## Contributions
${readmeData.contributions}

## Tests
${readmeData.tests}

## Credits
${readmeData.credits}

## Questions
${readmeData.questions}
`;
}

module.exports = generateMarkdown;

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // switch ie if mit license, return mit link
  if (license === "MIT") {
    return "MIT";
  }

  return "LICENSE LINK";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return "";
  }
  return renderLicenseLink(license);
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
    Install the following dependencies for the application: ${
      readmeData.dependencies
    }

## Usage
    ${readmeData.usage}

    ![alt text](assets/images/screenshot.png)

## License
    ${renderLicenseSection(readmeData.license)}
    ${renderLicenseLink(readmeData.licenseChoices)}

## Contributions
    [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)

## Tests

## Credits

## Questions
`;
}

module.exports = generateMarkdown;

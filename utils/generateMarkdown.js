// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(readmeData) {
  // if no license chosen
  if (!readmeData.license) {
    return `# ${readmeData.name}

## Table of contents
[General Info](#General Info)
Technologies Used
Features
Screenshots
Setup
Usage
Acknowledgements
Contact

## General Info

  # description ${readmeData.description}
`;
  } else {
    return `# ${readmeData.name}

## Table of contents
- General Info
Technologies Used
Features
Screenshots
Setup
Usage
Acknowledgements
Contact

  # description ${readmeData.description}

  # license ${readmeData.licenseChoices}
`;
  }
}

module.exports = generateMarkdown;

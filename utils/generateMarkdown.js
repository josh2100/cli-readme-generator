// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return "LICENSE LINK";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!readmeData.license) {
    return "";
  }
  return renderLicenseLink;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(readmeData) {
  return `# ${readmeData.name}

  # Description: ${readmeData.description}
  
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Tests](#tests)
  * [Contributions](#contributions)
  * [Credits](#credits)
  * [Contact](#contact)

  ## Installation 
    Install the following dependencies for the application: ${readmeData.dependencies}

  ## Usage
    ${readmeData.dependencies}

  ## License


`;
}

module.exports = generateMarkdown;

// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
//THEN a high-quality, professional README.md is generated with the title
//of my project and sections entitled Description, Table of Contents,
//Installation, Usage, License, Contributing, Tests, and Questions
const questions = [
  {
    type: "input",
    name: "name",
    message: "What is the title of your project?",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter the title of your README!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Describe your application",
    validate: (descriptionInput) => {
      if (descriptionInput) {
        return true;
      } else {
        console.log("Please enter a description!");
        return false;
      }
    },
  },

  {
    type: "input",
    name: "installation",
    message:
      "Describe how to install your application, and list any dependencies",
    validate: (installationInput) => {
      if (installationInput) {
        return true;
      } else {
        console.log("Please enter an installation description!");
        return false;
      }
    },
  },

  {
    type: "input",
    name: "usage",
    message: "Describe how to use your application.",
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log("Please enter a usage description!");
        return false;
      }
    },
  },

  {
    type: "confirm",
    name: "license",
    message: "Would you like to add a license?",
    default: true,
  },
  {
    /// This will only show up if license is true
    type: "list",
    name: "licenseChoices",
    message: "Provide a license for your project",
    choices: ["MIT", "Apache 2.0", "Boost 1.0", "BSD 3", "Eclipse 1.0"],
    when: ({ license }) => {
      if (license) {
        return true;
      } else {
        return false;
      }
    },
  },

  {
    type: "input",
    name: "contributions",
    message: "Describe how to contribute to your application.",
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log("Please enter a contribution explanation!");
        return false;
      }
    },
  },

  {
    type: "confirm",
    name: "testSection",
    message: "Would you like to add a tests section?",
    default: false,
  },

  {
    type: "input",
    name: "tests",
    message: "Describe how to test your application.",
    when: ({ testSection }) => {
      if (testSection) {
        return true;
      } else {
        return false;
      }
    },
  },
  {
    type: "input",
    name: "credits",
    message: "Give credits to the people who helped create this project.",
    validate: (creditInput) => {
      if (creditInput) {
        return true;
      } else {
        console.log("Please enter credits!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "questions",
    message:
      "Tell others how they can ask questions or contact you about the project.",
    validate: (questionInput) => {
      if (questionInput) {
        return true;
      } else {
        console.log("Please enter question information!");
        return false;
      }
    },
  },
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
//from portfolio generator
const writeFile = (fileName, data) => {
  return new Promise((resolve, reject) => {
    // fs.writeFile("./dist/index.html", data, (err) => {
    fs.writeFile(`./dist/${fileName}.md`, data, (err) => {
      // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
      if (err) {
        reject(err);
        return;
      }

      // if everything went well, resolve the Promise and send the successful data to the `.then()` method
      resolve({
        ok: true,
        message: "Markdown file created!",
      });
    });
  });
};

// TODO: Create a function to initialize app
function init() {
  return inquirer.prompt(questions).then((readmeData) => {
    console.log(readmeData.tableContents);
    return readmeData;
    // portfolioData.projects.push(projectData);
    // if (projectData.confirmAddProject) {
    //   return promptProject(portfolioData);
    // } else {
    //   return portfolioData;
    // }
  });
}

// Function call to initialize app
// init().then(console.log(readmeData));
init().then((readmeData) => {
  console.log(readmeData);
  // writeFile("fileme", readmeData.description);
  writeFile("fileme", generateMarkdown(readmeData));
});
// writeFile works!!
// writeFile("fileme", "hello");

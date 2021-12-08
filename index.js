const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// Array of questions to be asked with inquirer
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
    type: "input",
    name: "tests",
    message: "Describe how to test your application.",
    validate: (testsInput) => {
      if (testsInput) {
        return true;
      } else {
        console.log("Please enter how to test your application.");
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
    name: "github",
    message: "Enter your Github username for the questions section.",
    validate: (githubInput) => {
      if (githubInput) {
        return true;
      } else {
        console.log("Please enter your github username!");
        return false;
      }
    },
  },

  {
    type: "input",
    name: "email",
    message: "Enter your email address for the questions section.",
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please enter your email address!");
        return false;
      }
    },
  },
];

// Writes README data to markdown file
const writeFile = (fileName, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(`./dist/${fileName}.md`, data, (err) => {
      // if error, reject Promise, send to .catch() method
      if (err) {
        reject(err);
        return;
      }

      //resolve the Promise and send data to the .then() method
      resolve({
        ok: true,
        message: "Markdown file created!",
      });
    });
  });
};

// Ask array of questions with inquirer and return README data
function init() {
  return inquirer.prompt(questions).then((readmeData) => {
    return readmeData;
  });
}

// Promise chain asks questions, returns data, and writes to MD file
init().then((readmeData) => {
  console.log(readmeData);
  writeFile("README", generateMarkdown(readmeData));
});

// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
//THEN a high-quality, professional README.md is generated with the title
//of my project and sections entitled Description, Table of Contents,
//Installation, Usage, License, Contributing, Tests, and Questions
const questions = [
  {
    type: "input",
    name: "name",
    message: "What is the title of your project?",
    // .split(" ").join("") later
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
    message: "Description?",
    validate: (githubInput) => {
      if (githubInput) {
        return true;
      } else {
        console.log("Please enter a description!");
        return false;
      }
    },
  },

  {
    type: "confirm",
    name: "tableContents",
    message: "Would you like a table of contents?",
    default: true,
  },
  {
    /// This will only show up if confirmAbout is true
    type: "input",
    name: "installation",
    message: "Installation?",
    when: ({ confirmAbout }) => {
      if (confirmAbout) {
        return true;
      } else {
        return false;
      }
    },
  },
];

const promptUser = () => {
  return inquirer.prompt(questions);
};

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
function init() {}

// Function call to initialize app
init();

// writeFile works!!
// writeFile("fileme", "hello");

promptUser();

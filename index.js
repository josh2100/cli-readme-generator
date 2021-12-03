// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [];

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

writeFile("fileme", "hello");

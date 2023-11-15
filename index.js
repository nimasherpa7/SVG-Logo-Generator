const fs = require("fs");
const inquirer = require("inquirer");
const { Circle, Square, Triangle } = require("./main/lib/shapes");

const questions = [
  {
    type: "list",
    name: "shape",
    message: "Select the shape:",
    choices: ["Square", "Circle", "Triangle"],
  },
  {
    type: "input",
    name: "textColor",
    message: "What color do you what?",
  },
  {
    type: "input",
    name: "text",
    message: "Please type in maximum of (3) charecters",
  },
  {
    type: "input",
    name: "fill",
    message: "What should the background color be?",
  },
];


// lets create a circle object
// const myCircle = new Circle("black", "pink", "abc");
// run the renderCircle method, and capture the return in the const returnedText
// const returnedText = myCircle.renderCircle();
// log to the screen the returned text
// console.log("returnedText is", returnedText);

const init = () => {
  inquirer.prompt(questions).then((data) => {
    console.log("Creating SVG file.");
    switch (`${data.shape}`) {
      case "Square":
        console.log("Making a Square.");
        const square = new Square(data.fill, data.text, data.textColor);
        fs.writeFile("main/output/logo.svg", square.renderSquare(), (err) => {
          if (err) {
            console.log("fail");
          } else {
            console.log("Sucess!!!");
          }
        });
        break;
      case "Circle":
        console.log("Making a Circle.");
        const circle = new Circle(data.fill, data.text, data.textColor);
        fs.writeFile("main/output/logo.svg", circle.renderCircle(), (err) => {
          if (err) {
            console.log("fail");
          } else {
            console.log("Sucess!!!");
          }
        });
        break;
      case "Triangle":
        console.log("Making a Triangle.");
        const triangle = new Triangle(data.fill, data.text, data.textColor);
        fs.writeFile(
          "main/output/logo.svg",
          triangle.renderTriangle(),
          (err) => {
            if (err) {
              console.log("fail");
            } else {
              console.log("Sucess!!!");
            }
          }
        );
        break;
    }
  });
};

init();

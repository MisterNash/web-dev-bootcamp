import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
import { error } from "console";

const questions = {
  name: "URL",
  message: "Type an URL : ",
}

inquirer
  .prompt(questions)
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr-img.png"));

    fs.writeFile('URL.txt', url, err => {
      if (err) {
        console.error(err);
      } else {
        console.log("Your file is written successfully!")
      }
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/ 


import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
        message: "Enter your URL",
        name: "URL"
    }
  ])
  .then((answers) => {
    const url = answers.URL
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("image.png"))
  })
  .catch((error) => {
    if (error.isTtyError) {
      errorOccured();
    } else {
      errorOccured()
    }
  });

function errorOccured()
{
    console.error("Error occured");
}
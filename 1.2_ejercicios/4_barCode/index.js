import inquirer from 'inquirer';
import qr, { image } from 'qr-image';
import fs from "fs";

inquirer
  .prompt([
    /* Pass your questions in here */
    {
      message:"Escribe la direccion URL",
      name: "URL",
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!

    const enlace = answers.URL;
    var qr_png = qr.image(enlace);
    qr_png.pipe(fs.createWriteStream('qr-img.png'));

    fs.writeFile("enlace.txt", enlace, (err)=>{
      if(err) throw err;
      console.log("El archivo con el enlace ha sido creado correctamente  ");
    });
    
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
// Import module interne/natif de NodeJS
const fs = require('fs'); 


const generateForm = (name, number) => {
  const fileName = 'form-multiplacation-' + name + '-number-' + number + '.html'; 
  let fileData = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TP Multables</title>
  </head>
  <body>
    <h1>TP Multables</h1>
    <h2>Etudiant: ${name}</h2>
    <h3>Table des ${number}</h3>
  `;
  for (let i = 1; i < 11; i++) {
    fileData += `
    <div>
      <span>${i} x ${number}</span>
      <span> = </span>
      <input type="text">
    </div>
    `;
  }
  fileData += `
    </body>
  </html>
  `;

  if (fs.writeFileSync(fileName, fileData) > 0) {
    return true;
  };
  return false
}

// -------------------- EXPORTS -------------------- //
module.exports = {
  generateForm
}
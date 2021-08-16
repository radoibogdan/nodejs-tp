// Import module interne/natif
const { generateForm } = require('./form-service')

// Import module externe
const yargs = require('yargs');

const configStudent = {
  describe: 'Nom étudiant',
  alias: 's',
  required: true
}

const configNumber = {
  describe: 'Nombre pour la multiplication',
  alias: 'n',
  required: true
}

// Enregistre la commande 'generate'
const argv = 
  yargs
  .command('generate-form', 'Générer un formulaire de multiplication pour un nombre et un étudiant défini.',
    { 
      student : configStudent,
      number : configNumber 
    }
  )
  .help()
  .argv

// Recupère le nom de la commande
const cmd = argv._[0];

if (cmd === 'generate-form') {
  const resultat = generateForm(argv.student, argv.number);
  if (resultat) {
    console.log('[+] Le formulaire a été généré.');
  } else {
    console.log('[-] Le formulaire n\'a pas été généré.');
  }
} else {
  console.log('[-] Commande non reconnue.');
}
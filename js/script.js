console.log('JS OK');

// # Mail
/* 
1- Crea un array di email;
2- Chiedi all’utente la sua email.
3- controlla che sia nella lista di chi può accedere
4- stampa un messaggio appropriato in console sull’esito del controllo. 
*/

// # Gioco dei dadi
/* 
1- Generare un numero random da 1 a 6 
1b- sia per il giocatore sia per il computer.
2- Stabilire il vincitore, in base a chi fa il punteggio più alto.
3- Stampare in console i tiri di dado e il risultato. */

//! ESERCIZIO MAIL
// Prendo gli id dall html
const uEmail = document.getElementById("uEmail");
const enabledEmail = document.getElementById("enabledEmail");

// Creo array con mail
const mail = ['gianni@gmail.com', 'piero@gmail.com', 'giorgio@gmail.com', 'mario@gmail.com', 'luigi@gmail.com'];
console.table(mail);

// Chiedo la mail all'utente
const userEmail = window.prompt('Verifica la tua mail (solo Gmail sono valide)', '@gmail.com').trim().toLowerCase();
console.log(userEmail);

//* Stampo in pagina la mail
uEmail.innerText = userEmail;

// Controllo che la mail sia presente nell array
// Se nell array di mail è presente la mail inserita dall'utente

let authResult = ''; 

if (mail.includes(userEmail)) {
  authResult = "Mail autorizzata all'accesso";
} else {
  authResult = "Mail non autorizzata";
}

// Stampo in pagina se la mail ha l'autorizzazione
enabledEmail.innerText = authResult;

//! ESERCIZIO DADI
// Prendo gli id dall html
const urNumber = document.getElementById("urNumber");
const hisNumber = document.getElementById("hisNumber");
const diceResult = document.getElementById("diceResult");

//* Math.floor riporta un numero intero
//* Math.random riporta un numero random

//Viene scelto un numero tra 0 a 6
const userNumber = Math.floor(Math.random() * 6) + 1;
console.log('userNumber: ', userNumber);
// Il numero viene mostrato in pagina
urNumber.innerText = userNumber;

const pcNumber = Math.floor(Math.random() * 6) + 1;
console.log('pcNumber: ', pcNumber);
// Il numero viene mostrato in pagina
hisNumber.innerText = pcNumber;

let winner;
if (userNumber == pcNumber) {
  winner = "Pareggio"
} else if (userNumber > pcNumber) {
  winner = "Vittoria"
} else {
  winner = "Hai perso"
}

// Il risultato dei dadi viene mostrato in pagina
diceResult.innerText = winner;

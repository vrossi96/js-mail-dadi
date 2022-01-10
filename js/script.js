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

// ESERCIZIO MAIL

// Creo array con mail
const mail = ['gianni@gmail.com', 'piero@gmail.com', 'giorgio@gmail.com', 'mario@gmail.com', 'luigi@gmail.com'];
console.table(mail);

// Chiedo la mail all'utente
const userEmail = window.prompt('Verifica la tua mail', '@gmail.com').trim().toLowerCase();
console.log(userEmail);


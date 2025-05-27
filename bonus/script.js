/* Calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km(0.21 € al km)
- va applicato uno sconto del 20 % per i minorenni
- va applicato uno sconto del 40 % per gli over 65.

(output = in forma umana - con massimo due decimali, per indicare centesimi sul prezzo)
*/

/* TIP: per controllare che la vostra logica sui prezzi funzioni correttamente, provate a verificare quanto segue:
100km, 10 anni => prezzo corretto: €16.80
100km, 70 anni => prezzo corretto: €12.60
*/


// Chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
const tripInKm = Number(prompt("Digitare il numero di chilometri che si vuole percorrere"));
console.log(tripInKm);
const userAge = Number(prompt("Digitare l'età"));
console.log(userAge);

// Calcolare il prezzo del biglietto
let ticketPrice = tripInKm * 0.21;

// Calcolare il prezzo del biglietto in base all'età applicando gli sconti
if (userAge < 18) {
    ticketPrice = ticketPrice - [(ticketPrice * 20) / 100];
}
else if (userAge >= 65) {
    ticketPrice = ticketPrice - [(ticketPrice * 40) / 100];
}
else {
    const priceEuro = ticketPrice.toLocaleString('it-IT', { style: 'currency', currency: 'EUR' });
    console.log(priceEuro);
}




// // Provo ad usare il .toFixed 
// const tripInKm = Number(prompt("Digitare il numero di chilometri che si vuole percorrere"));
// const ticketPr = tripInKm * 0.21;
// const ticketRounded = ticketPr.toFixed(2);
// const euro = "\u20AC";
// console.log(`${ticketRounded} ${euro}`);

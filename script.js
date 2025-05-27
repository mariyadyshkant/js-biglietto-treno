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

// Calcolare il prezzo del biglietto senza sconto.

let ticketPrice = tripInKm * 0.21;
//console.log(ticketPrice);

const priceEuro = ticketPrice.toLocaleString('it-IT', { style: 'currency', currency: 'EUR' });
//console.log(priceEuro);

// Calcolare il prezzo del biglietto con applicato lo sconto del 20% per gli under 18.

const discount20 = (ticketPrice * 20) / 100; // questo è a quanto ammonta il 20% del prezzo del biglietto
//console.log(discount20);

const ticketPriceDiscount20 = ticketPrice - discount20; // questo è il prezzo effettivo del biglietto una volta applicato lo sconto del 20%
const discount20Euro = ticketPriceDiscount20.toLocaleString('it-IT', { style: 'currency', currency: 'EUR' });
//console.log(discount20Euro);

// Calcolare il prezzo del biglietto con applicato lo sconto del 40% per gli over 65.

const discount40 = (ticketPrice * 40) / 100; // questo è a quanto ammonta il 40% del prezzo del biglietto
//console.log(discount40);

const ticketPriceDiscount40 = ticketPrice - discount40; // questo è il prezzo effettivo del biglietto una volta applicato lo sconto del 40%
const discount40Euro = ticketPriceDiscount40.toLocaleString('it-IT', { style: 'currency', currency: 'EUR' });
//console.log(discount40Euro);

// Applicare le condizioni in base alle quali verrà restituito il prezzo corretto del biglietto tenendo conto anche dell'età del passeggero.

if (userAge < 18) {
    console.log(discount20Euro);

}
else if (userAge >= 65) {
    console.log(discount40Euro);
}
else {
    console.log(priceEuro);
}


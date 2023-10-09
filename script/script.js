// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

let testo = document.getElementById("testo");
let km = parseInt(prompt('inserire km da percorrere: '));
let eta = parseInt(prompt('inserire età: '));
let flag = true;

if(isNaN(km) || isNaN(eta) || km <=0 || eta < 0 || eta > 130 || km > 22000){
    testo.innerHTML = "INSERIRE VALORE VALIDO (NUMERI INTERI POSITIVI)";
    flag=false;
    setTimeout(function() {
        location.reload();
    }, 2000);
}

let totale = km*0.21;

if(eta < 18) totale *= 0.8;
else if(eta > 65) totale *= 0.6;

if(flag) testo.innerHTML = "PREZZO CALCOLATO: " + totale.toFixed(2) + "€";

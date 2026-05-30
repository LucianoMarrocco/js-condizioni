console.log("esercizio numero 6");

// DICHIARAZIONI DI VALORI
const fedelta = prompt("ha la tesssera fedeltà")
let prezzo = prompt("Inserisci il prezzo")
prezzo = Number(prezzo)


// BUSINESS LOGIC
if (fedelta == "si") {
    prezzo = prezzo - (prezzo * 10 / 100);
}


// OUTPUT
console.log("Il prezzo da pagare è di ", prezzo);
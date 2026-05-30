console.log("esercizio numero 9");

let voto = prompt("inserisci il voto che hai preso");

if (voto == 10) {
    console.log("Ottimo");
}
else if (voto == 8 || voto == 9) {
    console.log("Buono");
}
else if (voto == 6 || voto == 7) {
    console.log("Sufficiente");
}
else {//perchè non posso mettere (voto <6)
    console.log("Insufficiente");
}
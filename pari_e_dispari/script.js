//funzione per numero random

function numeroRandom (min , max){
    return Math.floor(Math.random() * (max-min+1) ) + min ; 
}

//azione utente
const sceltaUtente = prompt("Scegli: 'pari' o 'dispari'");
const numeroUtente = parseInt(prompt("Scegli un numero da 1 a 5"));


//azione computer
const computer =numeroRandom (1 ,  5);
console.log ("il computer ha scelto..." , computer);

//somma di numeri
const somma = numeroUtente + numeroComputer;
console.log("La somma è:", somma);



//controllare se e pari o dispari

function parita(num) {
    if (num % 2 === 0) {
        return 'pari';
    } else {
        return 'dispari';
    }
}




//confronto i valori di ritorno 

if (parita(somma) === sceltaUtente.toLowerCase()) {
    console.log(`Hai vinto! La somma è ${somma} ed è ${parita(somma)}.`);
} else {
    console.log(`Hai perso. La somma è ${somma} ed è ${parita(somma)}.`);
}


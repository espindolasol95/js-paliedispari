//azione utente
const utente = prompt ("scegli pari o dispari");
const numeroUtente = prompt("scegli un numero del 1 a 5");

//funzione per numero random

function numeroRandom (min , max){
    return Math.floor(Math.random() * (max-min+1) ) + min ; 
}


//azione computer
const computer =numeroRandom (1 ,  5);
console.log ("il computer ha scelto..." , computer);

//somma di numeri
const somma = utente + computer ;

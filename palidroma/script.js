 //richiesta di una parola al utente
 const parola = prompt ("inserisci una parola");

//check polidroma
 function palidroma (parola){
    const parolaAlContrario = parola.split(''). reverse(). join('') . toLowerCase();
    return parola === parolaAlContrario
 }

 //verifica
if ( palidroma (parola)){
    console.log ("la parola è palidroma!");
}else{
    console.log("la parola NON è palidroma!")
}
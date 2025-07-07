 //richiesta di una parola al utente
 const parola = prompt ("inserisci una parola");

//check polidroma
 function palidroma (parola){
    const parolaAlContrario = parola.split ('') .join ('') .reverse;  //reverse e necesaria??
    
    return parola === parolaAlContrario;


 }

 //verifica
if ( palidroma (parola)){
    console.log ("la parola è polidroma!");
}else{
    console.log("la parola NON è polidroma!")
}
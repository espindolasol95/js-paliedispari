 //richiesta di una parola al utente
 const parola = prompt ("inserisci una parola");

//check polidroma
 function palindroma (parola){
    parolaAlContrario = parola.split ('') .join('').reverse;  
    
    return pareola ===parolaAlContrario;
 }
 
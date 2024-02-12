// Snack 5 (bonus):
// Scrivi una funzione che accetti una stringa come parametro e restituisca la stessa stringa ma con le iniziali delle parole tutte in maiuscolo
// Es: funzioneEsempio("nel mezzo del cammin di nostra vita")  :freccia_destra:  "Nel Mezzo Del Cammin Di Nostra Vita"


const userString = "nel mezzo del cammin di nostra vita";

console.log(upperCaseWords(userString));


// funzione che rende maiuscole le iniziali di tutte le parole di una stringa
function upperCaseWords (string) {
    
    const wordsArray = string.split(" ");
    for (let i = 0; i < wordsArray.length; i++) {
        wordsArray[i] = wordsArray[i][0].toUpperCase() + wordsArray[i].slice(1);
    }
    const result = wordsArray.join(" ");
    return result;
}
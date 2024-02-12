// Snack 1:
// Scrivi una funzione che accetti una stringa come argomento e la restituisca girata (es. "Ciao" -> "oaiC")


// inizializzo elementi HTML e variabili
const inputElement = document.querySelector("#input");
const submitButtonElement = document.querySelector("#button");
const resultElement = document.querySelector("#result");


// al click del bottone invoco la funzione mirror
submitButtonElement.addEventListener('click',
    function () {
        const userWord = inputElement.value;
        resultElement.innerHTML = mirror(userWord);
    }
)


// funzione che specchia la parola
function mirror (word) {
    
    let mirroredWord = "";
    // inverto word con un ciclo for
    for (let i = 0; i < word.length; i++) {
        mirroredWord += word[word.length - 1 - i];
    }
    return mirroredWord;
}
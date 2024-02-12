// Snack 3:
// Scrivi una funzione che accetti tre argomenti:
// un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo quanto il numero di elementi dell’array).
// Es:
// abbiamo un array così: arrayNumeri = [0, 1, 2, 3, 4, 5, 6]
// La nostra funzione viene dichiarata ad esempio così function tagliaArray(array, posizioneMin, posizioneMax)
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra “posizioneMin” e “posizioneMax”
// Nel nostro caso, se la chiamassimo così tagliaArray(arrayNumeri, 2, 4) ci restituirebbe un array così composto:
// [2, 3, 4]

// inizializzo elementi HTML  e variabili
const arrayLenghtElement = document.querySelector("#array-lenght");
const arrayMinElement = document.querySelector("#array-min");
const arrayMaxElement = document.querySelector("#array-max");
const buttonElement = document.querySelector("#button");
const resultElement = document.querySelector("#result");

// al click del bottone genero array della lunghezza desiderata dall'utente e lo taglio in base al min e max inseriti
buttonElement.addEventListener('click', function(){
    const arraylenght = arrayLenghtElement.value;
    const arrayMin = arrayMinElement.value;
    const arrayMax = arrayMaxElement.value;
    const userArray = [];
    let resultArray = [];

    // ciclo for per generare array della lunghezza desiderata
    for (let i = 0; i < arraylenght; i++) {
        userArray.push(i)
    }

    // invoco funzione per tagliare array e stampo risultato in pagina
    resultArray = cutArray(userArray, arrayMin, arrayMax);
    resultElement.innerHTML = "Array generato: " + userArray + "<br> Array tagliato dalla posizione " + arrayMin + " alla posizione " + arrayMax + " : " + resultArray;

})

// funzione che taglia l'array in base al min e max scelti
function cutArray(array, min, max) {

    const resultArray = [];
    for (i = min; i <= max; i++) {
        resultArray.push(array[i]);
    }
    return resultArray;
}

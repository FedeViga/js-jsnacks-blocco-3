// Snack 4 (bonus):
// Scrivi una funzione  che accetti una stringa come parametro e restituisca la stringa con i caratteri ordinati alfabeticamente
// Es: riordina("webmaster") :freccia_destra: "abeemrstw"

const inputElement = document.querySelector('#input');
const buttonElement = document.querySelector('#button');
const resultElement = document.querySelector('#result');

// al click del bottone stampo parola riordinata alfabeticamente
buttonElement.addEventListener('click', function() {

    const userWord = inputElement.value;
    resultElement.innerHTML = sortString(userWord);
})



/*
converto stringa in array, lo riordino, lo riconverto in stringa e lo stampo

let userWordArray = [];

for (let i = 0; i < userWord.length; i++) {
    userWordArray.push(userWord[i]);
}
console.log(userWordArray);
const orderedArray = userWordArray.sort();
console.log(orderedArray);

const result = orderedArray.join('');
console.log(result);
*/

// versione contratta della funzione 
function sortString (string) {
    const orderedString = string.split('').sort().join('');
    return orderedString;
}

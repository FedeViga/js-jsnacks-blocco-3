// Snack 2:
// Scrivi una funzione che fonda due array presi come parametri (date per scontato che abbiano lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro
// es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].


const array1 = ["a", "b", "c", "d"];
const array2 = [1, 2, 3, 4];
const arraysElement = document.querySelector("#arrays");
const buttonElement = document.querySelector("#button");
const resultElement = document.querySelector("#result");


arraysElement.innerHTML = array1 + "<br>" + array2;

// al click del bottone invoco la funzione mixArray
buttonElement.addEventListener('click',
    function (){
        const result = mixArray(array1, array2);
        resultElement.innerHTML = result;
    }
)


// funzione che unisce e mixa i due array
function mixArray(array1, array2) {
    
    let result = [];
    for (i = 0; i < array1.length; i++) {
        result.push(array1[i]);
        result.push(array2[i]);
    }
    return result;
}

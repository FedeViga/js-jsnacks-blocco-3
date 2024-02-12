// Snack 2:
// Scrivi una funzione che fonda due array presi come parametri (date per scontato che abbiano lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro
// es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].


const array1 = ["a", "b", "c"];
const array2 = [1, 2, 3];
let result = [];


// ciclo for che unisce i due array
for (i = 0; i < array1.length; i++) {
    result.push(array1[i]);
    result.push(array2[i]);
}

console.log(result);

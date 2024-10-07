console.log("practice sort with numbers");


let numArray1: number[] = [36, 24, 22, 3, 2, 98, 88, 99, 10, 54, 68, 70];

console.log(numArray1.sort()); /* console returns : (12) [10, 2, 22, 24, 3, 36, 54, 68, 70, 88, 98, 99] not completeley ascending, because focus on first digit */

/* Sortiere die Zahlen aus dem Array im Code-Snippet aufsteigend. */

/* to sort numbers correctly, a compare function like below is needed */

function sortNumbersAscending(a: number, b: number){
    return a - b;
}

console.log(numArray1.sort(sortNumbersAscending));  /* console returns: (12) [2, 3, 10, 22, 24, 36, 54, 68, 70, 88, 98, 99] */

/* Sortiere anschließend die Zahlen aus dem Array absteigend */

function sortNumbersDescending(a: number, b: number){
    return b - a;
}

console.log(numArray1.sort(sortNumbersDescending)); /* console returns: (12) [99, 98, 88, 70, 68, 54, 36, 24, 22, 10, 3, 2] */

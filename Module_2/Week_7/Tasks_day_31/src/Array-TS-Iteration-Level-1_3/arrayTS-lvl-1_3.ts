console.log("practice map() ");

let array: number[] = [
    18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17, 56, 31, 100, 6, 5, 30, 74, 97, 28, 99, 91, 27, 73, 12, 92, 6, 27, 71, 26, 15, 78
];

console.log(array);
/* Jeder Wert aus dem Array (siehe Code-Snippet) soll mit 2 multipliziert und das Ergebnis sortiert werden */

const arrayOutput: number[] = array.map((digit : number) => {
    return digit * 2
})

console.log(arrayOutput); /* console returns : (35) [36, 32, 160, 102, 94, 76, 190, 84, 136, 122, 68, 102, 40, 34, 112, 62, 200, 12, 10, 60, 148, 194, 56, 198, 182, 54, 146, 24, 184, 12, 54, 142, 52, 30, 156] */

/* console.log(arrayOutput.sort((digitA: digit ,digitB: digit) => {
    return digitA - digitB;
})); */ /* not sure how to do this after example,  */

const sortedArrayOutput: number[] = arrayOutput.sort((a:number , b:number) => a-b);
console.log(sortedArrayOutput); /* console returns: (35) [10, 12, 12, 24, 30, 32, 34, 36, 40, 52, 54, 54, 56, 60, 62, 68, 76, 84, 94, 102, 102, 112, 122, 136, 142, 146, 148, 156, 160, 182, 184, 190, 194, 198, 200] */
  
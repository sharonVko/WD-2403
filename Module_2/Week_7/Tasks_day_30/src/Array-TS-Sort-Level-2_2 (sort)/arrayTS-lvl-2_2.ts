console.log("practice sort numbers till infinity");


let numArray: number[] = [36, 324, 122, 62, 98, 88, 99, 1000];
console.log(numArray.sort()); /* console returns: (8) [1000, 122, 324, 36, 62, 88, 98, 99] */

/* compare function for numbers */

function numsAscend(a:number, b:number){
    return a - b;
}

console.log(numArray.sort(numsAscend)); /* console returns ascending array: (8) [36, 62, 88, 98, 99, 122, 324, 1000] */


/* ***** STRING METHOD   SEARCH()  ******* */

console.log("hi");

let oceanQuote:string = "Blue, green, grey, white, or black; smooth, ruffled, or mountainous; that ocean is not silent."
/* search for ";" */
console.log(oceanQuote.search(";")); /* console returns : 34 , result is only first found match in text*/

/* search for "green" */
console.log(oceanQuote.search("green")); /* console returns : 6; */

console.log(oceanQuote.search("blue"));  /* console returns : -1 because word was not found; */

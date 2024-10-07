console.log("practice include");

let string: string = "Peter Piper picked a peck of pickled peppers. How many pickled peppers did Peter Piper pick?";

console.log(string);

let check1 = string.includes("Piper");
console.log(check1); /* console returns: true */

let check2 = string.includes("piper");
console.log(check2);  /* console returns: false */

console.log(string.includes("peck")); /* console returns: true */

/* Außerdem erlaubt die Methode, ab einem bestimmten Index zu suchen, lasse dir dazu die Suche nach “peck” ausgeben, das Ergebnis in der Konsole soll einmal true und einmal false ergeben. */

console.log(string.includes("peck", 20)); /* /* console returns due to index 20 being before the word: true */ 

console.log(string.includes("peck", 30));  /* console returns due to index 30 being after the word: false */






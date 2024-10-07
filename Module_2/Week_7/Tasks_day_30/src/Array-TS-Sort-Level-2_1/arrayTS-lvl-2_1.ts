console.log("practice sort and reverse");

const words: string [] = ["Sergio", "Hanna", "Regallager",
"Reliefpfeiler","Rentner"
];
console.log(words);

const sentences: string [] = ["Ella mag alle Bohnen", "han nesaH has ennaH"];
console.log(sentences);

const name: string  = "Sharon";
const reversedName:string [] = [...name];
/* console.log(reversedName.reverse()); */ /* console returns: (6) ['n', 'o', 'r', 'a', 'h', 's'] */
console.log(reversedName.reverse().join(''));  /* console returns: norahS */


console.log(words.reverse()); /* (5) ['Rentner', 'Reliefpfeiler', 'Regallager', 'Hanna', 'Sergio'] */

function reverseAnyString(){

}

/* not sure how to do this */



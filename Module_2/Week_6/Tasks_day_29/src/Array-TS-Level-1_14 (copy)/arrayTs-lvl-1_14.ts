console.log("shalom");

const oldHollywoodActors: string[] = ["Marlon Brando", "Audrey Hepburn", "Elizabeth Taylor","Cary Grant","Paul Newman", "Doris Day" ]; 
console.log(oldHollywoodActors); /* console returns: (6) ['Marlon Brando', 'Audrey Hepburn', 'Elizabeth Taylor', 'Cary Grant', 'Paul Newman', 'Doris Day'] */

const actorsReference: string[] = oldHollywoodActors;
console.log(actorsReference);

actorsReference.push("Marilyn Monroe");
console.log(actorsReference); /* console returns:(7) ['Marlon Brando', 'Audrey Hepburn', 'Elizabeth Taylor', 'Cary Grant', 'Paul Newman', 'Doris Day', 'Marilyn Monroe'] */
console.log(oldHollywoodActors); /* console returns THE SAME: (7) ['Marlon Brando', 'Audrey Hepburn', 'Elizabeth Taylor', 'Cary Grant', 'Paul Newman', 'Doris Day', 'Marilyn Monroe']*/

/* - Erstelle mit concat() eine Kopie von oldHollywoodActors
- Erstelle eine weitere Kopie mit slice()
- Erstelle eine dritte Kopie mit dem Spread-Operator */

let concattedOldHollywoodActors: string[] = oldHollywoodActors.concat();
console.log(concattedOldHollywoodActors); /* console returns THE SAME:  (7) ['Marlon Brando', 'Audrey Hepburn', 'Elizabeth Taylor', 'Cary Grant', 'Paul Newman', 'Doris Day', 'Marilyn Monroe'] */

let slicedOldHollywoodActors: string [] = oldHollywoodActors.slice(0,7);
console.log(slicedOldHollywoodActors); /* console returns THE SAME: (7) ['Marlon Brando', 'Audrey Hepburn', 'Elizabeth Taylor', 'Cary Grant', 'Paul Newman', 'Doris Day', 'Marilyn Monroe'] */

let spreadOldHollywoodActors: string [] = [...oldHollywoodActors];
console.log(spreadOldHollywoodActors); /* console returns THE SAME AGAIN: (7) ['Marlon Brando', 'Audrey Hepburn', 'Elizabeth Taylor', 'Cary Grant', 'Paul Newman', 'Doris Day', 'Marilyn Monroe'] */

concattedOldHollywoodActors.push("Greta Garbo");
console.log(concattedOldHollywoodActors); /* console returns: (8) ['Marlon Brando', 'Audrey Hepburn', 'Elizabeth Taylor', 'Cary Grant', 'Paul Newman', 'Doris Day', 'Marilyn Monroe', 'Greta Garbo'] */

slicedOldHollywoodActors.unshift("James Dean");
console.log(slicedOldHollywoodActors); /* console returns: (8) ['James Dean', 'Marlon Brando', 'Audrey Hepburn', 'Elizabeth Taylor', 'Cary Grant', 'Paul Newman', 'Doris Day', 'Marilyn Monroe'] */

spreadOldHollywoodActors.push("Sopia Loren"); 
console.log(spreadOldHollywoodActors); /* console returns: (8) ['Marlon Brando', 'Audrey Hepburn', 'Elizabeth Taylor', 'Cary Grant', 'Paul Newman', 'Doris Day', 'Marilyn Monroe', 'Sopia Loren'] */

console.log(oldHollywoodActors);

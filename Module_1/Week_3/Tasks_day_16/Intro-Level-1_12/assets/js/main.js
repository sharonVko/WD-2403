/* arithmetic operators */

// let score = 5 + 5 * 10;   
// console.log("Ergebnis: " + score);

// let score = (5 + 5) * 10;       /* Rechnung in der Klammer hat Vorrang */  
// console.log("Ergebnis: " + score);

let score = 0;  
score = score + 10;  
console.log('Ergebnis: ' + score);

score += 10;     /* Kurzform für Zeile 9 &10  */
console.log('Ergebnis: ' + score) 

let zahl = 1;  
zahl = zahl + 1;  
console.log(zahl); /* Konsole zeigt 2 */

zahl += 1;
console.log(zahl); /* increase 1,  Konsole zeigt 3*/

zahl++;  
console.log('increment: ' + zahl); /* Konsole zeigt 4 */

zahl--;  
console.log('dekrement: ' + zahl); /* decrease 1 , Konsole zeigt 3 */

/* ************** ARITHMETIC OPERATORS TYPESCRIPT STANDARD ************ */


/* Multiplikation geht vor und so wird 5 * 10 zuerst durchgeführt:   */
/* let score: number = 5 + 5 * 10;  
console.log('Ergebnis: ' + score); */ /* console returns: Ergebnis: 55 */

/* Du kannst Klammern() hinzufügen, um die Reihenfolge der Prioritäten zu ändern:   */
/* let score = (5 + 5) * 10;  
console.log('Ergebnis: ' + score) */; /* console returns: Ergebnis: 100 */

/* Du kannst Werte auf Variablen addieren:   */
let score = 0;  
score = score + 10;  
console.log('Ergebnis: ' + score);

/* Hiervon gibt es eine verkürzte Version:   */
score += 10;  
console.log('Ergebnis: ' + score) /* console returns: Ergebnis: 10 */

/* Inkrementierungen und Dekrementierungen können wie folgt verwendet werden:  */
let zahl = 1;  
zahl = zahl + 1;  
zahl += 1;

/*  Inkrement-Operator:   */
zahl++;  
console.log('increment: ' + zahl);  /* console returns: increment: 4 */

/* Verwende den Dekrement-Operator:   */
zahl--;   
console.log('dekrement: ' + zahl); /* console returns: decrement: 3 */
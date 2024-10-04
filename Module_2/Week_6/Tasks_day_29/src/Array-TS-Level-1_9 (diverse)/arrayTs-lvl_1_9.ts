console.log("salut");

const numArray:number [] = [23,54,75];
console.log(numArray); /* console returns: (3) [23, 54, 75] */

numArray.push(11,32,42,5,71);
console.log(numArray); /* console returns: (8) [23, 54, 75, 11, 32, 42, 5, 71] */

numArray.unshift(1,3,8,7,14);
console.log(numArray); /* console returns: (13) [1, 3, 8, 7, 14, 23, 54, 75, 11, 32, 42, 5, 71] */
numArray.pop();
console.log(numArray); /* console returns<. (12) [1, 3, 8, 7, 14, 23, 54, 75, 11, 32, 42, 5] */
numArray.pop();
console.log(numArray); /* console return: (11) [1, 3, 8, 7, 14, 23, 54, 75, 11, 32, 42] */
numArray.shift();
console.log(numArray); /* console returns: (10) [3, 8, 7, 14, 23, 54, 75, 11, 32, 42] */

numArray.shift();
console.log(numArray); /* console returns: (9) [8, 7, 14, 23, 54, 75, 11, 32, 42] */



/* - Wenn du Werte am Anfang und Ende eines TypeScript-Arrays hinzufügst und entfernst, kann es schwierig sein, sich daran zu erinnern, welche Methode was tut. Hier sind einige Tipps:
- Unshift und Shift verschieben das gesamte Array seitwärts (durch Hinzufügen und Entfernen von Elementen am Anfang).
- Push und Pop verschieben das Array NICHT seitlich (weil sie Elemente am Ende hinzufügen und entfernen).
- Eine ganz simple Eselbrücke wäre:  Bei den Paaren Push/Pop und Unshift/Shift verlängert die Methode mit mehr Buchstaben jeweils das Array:
- Push/Pop - Push hat mehr Buchstaben als Pop = Push fügt Element(e) zum Array hinzu; Pop entfernt Element(e).
- Unshift/Shift - Unshift hat mehr Buchstaben als Shift = Unshift fügt Element(e) zum Array hinzu, Shift entfernt Element(e). */
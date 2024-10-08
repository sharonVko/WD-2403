console.log("practice map()");

let checkNumber: number[] = [
    18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17, 56, 31, 100, 6, 5, 30, 74, 97, 28, 99, 91, 27, 73, 12, 92, 6, 27, 71, 26, 15, 78
];
console.log(checkNumber);

/* - In der map-Methode soll Folgendes passieren:
    - Überprüfe mit einem if-Statement, ob die Zahl durch 3 teilbar ist.
    - Wenn ja: Addiere 100 zu dieser Zahl hinzu.
    - Wenn nein: Lasse die Zahl so wie sie ist
- Das Ergebnis der map-Methode soll in einem neuen Array gespeichert werden
- Gib das Ergebnis in der Konsole aus. */

const checkDivision3: number[] =  checkNumber.map((digit:number) => {
    if(digit % 3 === 0){
        return digit + 100;
         
    } else {
        return digit
    }
})

console.log(checkDivision3);  /* console returns: (35) [118, 16, 80, 151, 47, 38, 95, 142, 68, 61, 34, 151, 20, 17, 56, 31, 100, 106, 5, 130, 74, 97, 28, 199, 91, 127, 73, 112, 92, 106, 127, 71, 26, 115, 178] */

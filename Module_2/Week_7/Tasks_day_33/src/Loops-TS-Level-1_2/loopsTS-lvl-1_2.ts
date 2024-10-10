console.log("practice loops");

/* 
Erstelle ein Array mit den Zahlen 0-10 mithilfe einer Schleife.
Wenn du mit Arrays arbeitest, musst du das Array initialisieren
let numbersToTen: number[]  = [];
- Verwende den Befehl push() im Schleifenkörper.
- Gib zum Schluss die Variable numbersToTen in der Konsole aus. */
let numbersToTen: number[]  = [];

for(let nums:number = 0; nums < 11; nums++){
    numbersToTen.push();
    console.log(nums); /* console returns:  0
    loopsTS-lvl-1_2.ts:7 1
    loopsTS-lvl-1_2.ts:7 2
    loopsTS-lvl-1_2.ts:7 3
    loopsTS-lvl-1_2.ts:7 4
    loopsTS-lvl-1_2.ts:7 5
    loopsTS-lvl-1_2.ts:7 6
    loopsTS-lvl-1_2.ts:7 7
    loopsTS-lvl-1_2.ts:7 8
    loopsTS-lvl-1_2.ts:7 9
    loopsTS-lvl-1_2.ts:7 10 */
    
    /* console.log(numbersToTen); */  /* console returns empty []  ?! */
    
}
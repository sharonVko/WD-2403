

//Schreibe eine Funktion, die nach x Sekunden einen Text anzeigt. Dafür kannst du die setTimeout()-Methode nutzen.

console.log("Start: Warten für 3 Sekunden");
setTimeout(() => {
    console.log("Du hast 3 Sekunden verschwendet");
    
}, 3000);

//- Schreibe anschließend eine weitere Funktion, die genau das Ergebnis, das unten in der Vorschau angezeigt wird, ausgibt. Nutze hierfür: setInterval(), clearInterval() und if/else.
//- **Bitte halte dich an den Typescript-Standard.**

let counter= 11;


const showCountdown = setInterval(() => {
    counter -= 1;
    console.log(`${counter}`);
    if (counter <= 0){
        console.log("Endlich Feierabend!");
        clearInterval(showCountdown)
    }
    
}, 1000);


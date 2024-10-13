console.log("practice loops + math(random)");

/* Schreibe eine Funktion addToFifty(): void
In der Funktion soll in einer Schleife eine Zufallszahl zwischen 1 und 10 generiert werden
Die Zahl soll jeweils auf der Konsole ausgegeben werden
Die Zufallszahlen sollen so lange aufaddiert werden, bis die Zahl 50 überschritten wird
Am Ende wird z. B. beim Gesamtergebnis 53 Folgendes ausgegeben
'53 > 50. Stopping right here.' */

const addToFifty = (): void => { /*declaring function void (does not have a return value) */
    let sum: number = 0; /* initialising variable, fuctioning as a counter from 0 */

    for(let num= 0; sum < 50; num++){ /* loop running as long as sum is smaller than 50 */
        let randomNumber: number = Math.round(Math.random() * 10) /* gererating random number between 0 and 10 */
       sum += randomNumber; /* adding generated number to sum-variable */
       console.log(sum); /* console returns 10 random numbers */
        
    }
    console.log(`${sum} > 50. Stopping right here.`); /* (when loop ends because sum is bigger than 50)console returns: 54 > 50. Stopping right here. */
    
}

addToFifty(); /* calling function to run code adding up the random numbers until sum is bigger than 50 */
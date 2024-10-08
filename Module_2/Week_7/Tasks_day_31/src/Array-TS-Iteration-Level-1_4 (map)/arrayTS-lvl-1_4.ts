console.log("practice map() ");
/* - Verwende das Array aus dem Code-Snippet. */
let fahrenheit: number[] = [0, 32, 45, 50, 75, 80, 99, 120];
console.log(fahrenheit);

/* - Schreibe Code, der mit Hilfe von map() ein Array aus Temperaturen von Fahrenheit in Celsius umwandelt.
- Verwende die [mathematische Formel] celsius = (℉ - 32) / 1.8 zur Umrechnung.
 */

const convert2Celsius: number [] =  fahrenheit.map((degrees:number ):number => {
    const celsius:number = (degrees - 32) / 1.8;
    return Math.round(celsius);  
})

/* - Überprüfe das Ergebnis in der Konsole. */
console.log(convert2Celsius); /* console returns: (8) [-18, 0, 7, 10, 24, 27, 37, 49] */

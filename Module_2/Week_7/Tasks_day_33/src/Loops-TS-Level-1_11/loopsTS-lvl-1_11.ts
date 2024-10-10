console.log("practice loops");

/* - Schreibe eine Funktion calculateSum mit einem Parameter maxNumber: number
- Sie soll die Summe aller Zahlen von 1 bis zur angegebenen Zahl (maxNumber) berechnen und zurückgeben.
- Verwende eine Schleife, um die Zahlen von 1 bis n zu durchlaufen und ihre Summe zu berechnen. */

const calculateSum = (maxNumber:number) =>{ /*  */
    let sum:number = 0;
    for(let n:number = 1; n <= maxNumber; n++)
        sum += n;
    console.log(sum);
    
};




calculateSum(10); /* console returns: 55 */
calculateSum(20); /* console returns: 210 */
calculateSum(3);/* console returns: 6 */
calculateSum(999); /* console returns: 499500 */
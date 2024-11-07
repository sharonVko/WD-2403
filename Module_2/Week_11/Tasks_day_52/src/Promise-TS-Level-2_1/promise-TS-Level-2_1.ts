// (a.k.a number-methods.ts)

//Erstelle ein Promise vom Typ number[]
//Lass dir mit Math.random drei zufällige Werte zwischen 1 und 130 generieren
const randomNumbers:Promise<number []> = new Promise((resolve, reject) => {
    const num1:number = Math.floor(Math.random() * 130) + 1; 
    const num2:number = Math.floor(Math.random() * 130) + 1; 
    const num3:number = Math.floor(Math.random() * 130) + 1; 
    if(num1 <100 ||num2 < 100||num3 < 100) {
        resolve([num1, num2, num3]); //Schreibe andernfalls die drei Werte in ein Array und resolve das Array
     } else {
                reject('Sorry, at least one number is too big') //ist einer der Werte größer als 100, rejecte das komplette Promise mit einem Fehlertext
            } 
});
//- Hänge dich an das Promise. Es werden fünf then-Blöcke aneinandergehängt (Chaining)
randomNumbers.then(numbers => {
    //Im ersten then-Block soll auf jeden Wert 7 aufaddiert werden
    console.log('Round 1: adding 7 to each number: ', numbers);
    return numbers.map(num => num + 7);
    //Im zweiten then-Block soll jeder Wert mit 2 multipliziert werden
}).then(numbers => {
    console.log('Round 2: multiply* them by 2:  ', numbers);
    return numbers.map(num => num * 2)
    // //Im dritten then-Block soll von jedem Wert 1 abgezogen werden
}).then(numbers => {
    console.log('Round 3: subtract them by 1:  ', numbers);
    return numbers.map(num => num - 1);
    //Im vierten then-Block soll für jeden Wert Modulo 2 ermittelt werden
}).then(numbers => {
    console.log('Round 4: find their %modulo 2 : ', numbers);
    return numbers.map(num => num % 2);
    //Im fünften then-Block sollen die Werte auf die Konsole geloggt werden
}).then(numbers => {
    console.log("Round 5: show 'em all", numbers);
    //Gib im catch-Block den Fehler auf der Konsole aus
}).catch((error) => {
    console.error(error);
    //Gib im finally-Block “Finished” auf der Konsole aus
}).finally(() => {
    console.log('Finished');
});


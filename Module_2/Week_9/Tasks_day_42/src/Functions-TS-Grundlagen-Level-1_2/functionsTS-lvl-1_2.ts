
const output = document.querySelector('#output') as HTMLElement;

//Schreibe eine Function, die "Hallo" in deinem HTML anzeigt.
function sayHelloUsual ():void {

    output.textContent = "Hallo";

}
sayHelloUsual() /* shows hallo in browser */

const sayHelloArrow = () => {
    output.textContent = "Hallo 2"
};

sayHelloArrow() /* shows Hallo 2 in browser */


//Schreibe eine 2. Function, die die Summe von zwei Zahlen in deinem Browser (Konsole oder HTML) anzeigt.

function showNumberUsual(a:number, b:number):number {
    return a + b;
    
};
console.log(
 showNumberUsual(2,5)); /* console returns: 7 */

const showNumberArrow = (a:number, b:number):number => {
    return a + b;
    
};
console.log(
 showNumberArrow(2,6)); /* console returns: 8 */

// Schreibe eine 3. Function, die das Ergebnis der Multiplikation von zwei Zahlen über window.alert ausgibt 

// function multiplyNumbersUsual( a:number, b:number):number{
//     return a * b
    
// };
// window.alert(multiplyNumbersUsual(3,3)); /* window pops up , showing result : 9 */

const multiplyNumbersArrow = (a:number, b:number):number => {
    return a * b;
};

window.alert(multiplyNumbersArrow(4,4)); /* window pops up , showing result : 16 */


//- Schreibe eine 4. Function, die einen Parameter vom Typ Object hat und die alle Eigenschaften (Keys) des Objekts in der Konsole ausgibt.

type TCartoonCharacter = {
    firstName : string,
    lastName: string,
    age: number,
    city: string
};

const objectExample: TCartoonCharacter = {
    firstName : "Homer",
    lastName: "Simpson",
    age: 50,
    city: "Springfield"
};

 function logObjectKeysUsual (obj: TCartoonCharacter):void{
    Object.keys(obj).forEach((key) => {
        console.log(key);
        
    })
};

logObjectKeysUsual(objectExample);



const logObjectKeysArrow = (obj: TCartoonCharacter): void => {
    const keys = Object.keys(obj);
    keys.forEach(key => {
        console.log(key);
    });
};





logObjectKeysArrow(objectExample); /* console returns:  firstName, lastName, age, city*/
console.log(objectExample); /* console returns:  {firstName: 'Homer', lastName: 'Simpson', age: 50, city: 'Springfield'}*/





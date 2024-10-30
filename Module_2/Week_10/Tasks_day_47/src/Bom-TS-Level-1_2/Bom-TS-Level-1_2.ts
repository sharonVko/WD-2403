//- Lernziel: TypeScript-Eventhandling und Timer-Function.
//- **Bitte halte dich an den Typescript-Standard.**
//- Schreibe eine Function, die beim Klicken des Buttons von 100% bis 0% runterzählt.
//- HTML und CSS ist vorgegeben (siehe Code-Snippet).
//- Nutzen kannst du folgende Befehle und Methoden:  addEventListener, setInterval(), clearInterval(), if, else if und querySelector() oder getElementById().


const button = document.querySelector('#btn')as HTMLButtonElement;

const zeit = document.querySelector('.zeit') as HTMLDivElement;
console.log(button, zeit);

let counter = 100; /* starting at 100 (%) */

button?.addEventListener('click', () => {
    /* console.log("btn works"); */
    const interval = setInterval(() =>{
    if (counter === 0 ){
        clearInterval(interval); /* to stop the interval from running */

        } else{
            counter--;
            zeit.innerText = `${counter}%` /* to change percentage in div */
        }
    },50);
})
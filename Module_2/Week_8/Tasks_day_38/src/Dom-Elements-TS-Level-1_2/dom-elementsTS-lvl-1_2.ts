console.log("practice DOM");

//Schreibe eine Funktion, die beim Anklicken der Buttons die Hintergrundfarben aller Elemente ändert.
// alle class example elemente werden bg black, text white

const changeBtn = document.querySelector('button') as HTMLButtonElement;
console.log(changeBtn); //catching html elements

const allExampleElements = document.getElementsByClassName('example') as HTMLCollection ; //catch all elements with class'example'
    console.log(allExampleElements);
    console.log(allExampleElements[0]); //index needed to pick from html collection
    console.log(allExampleElements[1]);
    console.log(allExampleElements[2]);
    console.log(allExampleElements[3]);
    console.log(allExampleElements[4]);
    
    
    
    //version without bonus (chnange colors back)

// changeBtn?.addEventListener('click', () => {
    
//     if (allExampleElements) {
//         for(let i = 0; i < allExampleElements.length; i++) { //running through each element of element collection
//             (allExampleElements[i] as HTMLElement).style.backgroundColor = 'black', (allExampleElements[i] as HTMLElement).style.color = 'white'; // 
//         }
//     }
    
// });


// Version with bonus (switch back to original color on next button click)

// Variable for original condition of colors
let isChanged = false;

changeBtn?.addEventListener('click', () => {
    if (allExampleElements) {
        for (let i = 0; i < allExampleElements.length; i++) {
            const element = allExampleElements[i] as HTMLElement;
            if (isChanged) {
                // Setting background and textcolor to original condition (empty string for original condition)
                element.style.backgroundColor = '';
                element.style.color = '';
            } else {
                // Setting colors 
                element.style.backgroundColor = 'black', element.style.color = 'white';
            }
        }
        // change the condition
        isChanged = !isChanged;
    }
});

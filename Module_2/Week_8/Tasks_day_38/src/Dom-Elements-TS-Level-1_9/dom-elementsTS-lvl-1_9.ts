console.log("practice addEventListener(), selectedIndex and remove()");

//- Dieses Mal sollst du eine Function schreiben, die beim Anklicken des Buttons die jeweilige Farb-Option aus der Liste entfernt.

//- HTML und CSS ist vorgegeben. Siehe Code-Snippet.

//  - [addEventListener()]für den Klick auf den Button



// - [selectedIndex()]um dir das ausgewählte Element aus dem Select zu holen

//  - [remove()] um über den Index das Element zu löschen

const farbeAuswahlen = document.getElementById('farbeAuswahlen') as HTMLSelectElement;
console.log(farbeAuswahlen);

const colorOptions = document.getElementsByTagName('option') as HTMLCollection;
console.log(colorOptions);
/* console.log(colorOptions[3]); */


const removeBtn = document.querySelector('#button') as HTMLButtonElement;
console.log(removeBtn);

removeBtn?.addEventListener('click', (event) => {
    event.preventDefault() // to stop default setting of button (within the form) which keeps sending the form over and over again
   /*  console.log("test"); */

    const selectColor = farbeAuswahlen.selectedIndex; /* getting index of selected option */
    
    if(selectColor !== -1){
        farbeAuswahlen.options[selectColor].remove(); /* if an option was selected, remove it ! */
    }
});
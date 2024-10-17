console.log("practice DOM");

//Erstelle eine einfache Website auf der dynamisch eine Einkaufsliste erzeugt werden soll.
//Beim Klicken auf den Button sollte der eingegebene Text aus dem Input-Feld der Liste hinzugefügt werden.

const inputText = document.getElementById('inputText') as HTMLInputElement;
console.log(inputText);

const addBtn = document.getElementsByTagName('button');
console.log(addBtn[0]); //index to pick button from html collection

const myList = document.querySelector('#myList') as HTMLUListElement;
console.log(myList);

addBtn[0]?.addEventListener('click', () => {
    console.log(inputText.value);  /* check btn cathcing value */
   
    const createList = document.createElement("li"); /* create list element in ul for the value */
    createList.textContent = inputText.value; 
    myList?.appendChild(createList);

//Das Input-Feld soll nach jedem Hinzufügen geleert werden.
inputText.value = '' /* clear input field after every input */
})



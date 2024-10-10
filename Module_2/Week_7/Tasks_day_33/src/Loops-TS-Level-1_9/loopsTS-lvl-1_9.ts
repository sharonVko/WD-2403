console.log("practice loops");

/* - Dein Ziel ist es, nur die Wörter ins HTML zu schreiben, bei denen die Länge des Wortes mit der Zahl des Inputfelds übereinstimmt.
- Verwende ein Loop oder eine Arraymethode. */
let words: string[] = ['hallo', 'Auto', 'Waschmaschine', 'Schrank', 'Katze', 'Beispiel', 'Eltern', 'Fenster', 'Geburtstag', 'Himmel', 'schwimmen', 'Zeitung'];

console.log(words);

const  addWord = document.querySelector('#addWord') as HTMLInputElement;
const  addBtn = document.querySelector('#addBtn') as HTMLInputElement;
const wordLength = document.querySelector('#wordLength') as HTMLInputElement;
const filterBtn = document.querySelector('#filterBtn') as HTMLInputElement;
const output = document.querySelector('#output')as HTMLElement;

console.log(addWord);
console.log(addBtn);
console.log(wordLength);
console.log(filterBtn);
console.log(output);

addBtn?.addEventListener('click', () => {
    const addedValue = addWord?.value;
    console.log(addedValue);
});


/*to do: get both values and compare */


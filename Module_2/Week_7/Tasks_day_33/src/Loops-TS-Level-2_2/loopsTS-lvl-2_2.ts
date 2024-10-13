console.log("practice loops + innerHTML");

const numInsert = document.querySelector('#numInsert') as HTMLInputElement;
const convertBtn = document.querySelector('#convertBtn') as HTMLInputElement;
const output = document.querySelector('#output') as HTMLElement;

console.log(numInsert);
console.log(convertBtn);
console.log(output);


convertBtn?.addEventListener('click', () => {
    console.log("button working"); /* adding eventlistener to button */

    const numOfOs = Number(numInsert.value); /* getting value of input field and converting it to a number */
    
    let resultOutput = 'Loo';
    for(let letterO = 0; letterO < numOfOs; letterO++){
        resultOutput += 'o'; /* adding as many o's as rquested in input field */
    }
    output.innerHTML += `<h3>${resultOutput + 'p'}</h3>`; /* showing result in browser through h3 innerHTML */
});


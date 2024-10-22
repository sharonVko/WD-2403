console.log("check");


const textInput = document.querySelector('#textInput') as HTMLInputElement;
const countUppercaseBtn = document.querySelector('#countUppercaseBtn') as HTMLButtonElement;
const countSpaceBtn = document.querySelector('#countSpaceBtn') as HTMLButtonElement;
const countVowelsBtn = document.querySelector('#countVowelsBtn') as HTMLButtonElement;
const output = document.querySelector('#output') as HTMLElement;

console.log(textInput,countUppercaseBtn,countSpaceBtn,countVowelsBtn,output);

/* Function to count upperCase letters of input */
const upperCaseCount = (str:string):number => {
    let result = 0;
    for (let i = 0; i < str.length; i += 1) {
      if ((str[i] >= "A" && str[i] <= "Z" ) || str[i] === "Ä" || str[i] === "Ö" || str[i] === "Ü") {
        result++;
      }
    }
    return result;
    };
    console.log(upperCaseCount("dAniEl"));
   /*  countUppercaseBtn.addEventListener('click', upperCaseCount) */
    
/* Function to count spaces of input*/
    const countSpaces = (str: string): number => {
        return (str.split(' ').length - 1);
    };    

    /* Function to count vowels of input */
 const countVowels = (str:string):number => {
    let count = 0;
    let convertArr = str.toLowerCase().split("");
    let vowels = ["a","e","i","o","u"];
    console.log(convertArr);

    for(let i = 0; i < convertArr.length; i++) {
        if (vowels.includes(convertArr[i])) {
            count++;
        }
    }
    return count;
 };
 console.log(countVowels("daniel"));
 
 countUppercaseBtn?.addEventListener('click',() => {

    const textValue: string = textInput.value;
    const result = upperCaseCount(textValue);
    output.textContent = `Amount of Capital letters: ${result}`;
});

countSpaceBtn?.addEventListener('click',() => {
    const textValue: string = textInput.value;
    const result = countSpaces(textValue);
    output.textContent = `Amount of Spaces: ${result}`;
    
});

countVowelsBtn?.addEventListener('click',() => {
    const textValue: string = textInput.value;
    const result = countVowels(textValue);
    output.textContent = `Amount of Vowels: ${result}`
});
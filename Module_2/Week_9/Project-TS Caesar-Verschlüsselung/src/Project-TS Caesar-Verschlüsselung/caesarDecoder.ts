console.log("decode");

const textInput = document.querySelector('#textInput') as HTMLInputElement;
const keyInput = document.querySelector('#keyInput') as HTMLInputElement;
const encodeBtn = document.querySelector('#encodeBtn') as HTMLButtonElement;
const decodeBtn = document.querySelector('#decodeBtn') as HTMLButtonElement;
const output = document.querySelector('#output') as HTMLElement;

console.log(textInput, keyInput,encodeBtn,decodeBtn,output);


const letters: string [] = "abcdefghijklmnopqrstuvwxyz".split("");

//Encrypt function
const encryptCaesar = (input:string, key:number):string => {
    let result = ""; /* empty string to save new encrypted result */
    input = input.toLowerCase(); /* every input is converted to lowercase */

    for(let singleLetter of input) { /* running through each letter of input */
        if(letters.includes(singleLetter)) { /* checking if that letter is existing in the alphabet */
            let shiftedLetters = [...letters]; /* spread operator creates a copy of letters (alphabet) array */
            for (let i = 0; i < key; i++) { /* shifting the letters of the alphabet referring to inserted key */
                shiftedLetters.push(shiftedLetters.shift() as string);
            }
            let index = letters.indexOf(singleLetter); /* checking index of single letter */
            result += shiftedLetters[index]; /* adds matching encryption so result */
        }else {
            result += singleLetter;
        }
    }
    return result; /* returns the encrypted result  */
};

// Decrypt function for ecrypted inputs of user

const decryptCaesar = (input:string, key:number): string => {
    let result = "";
    input = input.toLowerCase();

    for(let character of input) {
        if(letters.includes(character)) {
            let shiftedLetters = [...letters];
            for (let i = 0; i < key; i++) {
                shiftedLetters.unshift(shiftedLetters.pop() as string); /* Moving the alphabet in the opposite direction */
            }
            let index = letters.indexOf(character);
            result += shiftedLetters[index];
        } else {
            result += character;
        }
    }
    return result;
};

encodeBtn?.addEventListener('click', () => {
    const textValueEnc = textInput.value; /* fetching values from users inputs */
    const keyValueEnc = Number(keyInput.value); /* need to be converted to number */

    output.textContent = `${encryptCaesar(textValueEnc,keyValueEnc)}`; /* result output through #output div tag in html */
});

decodeBtn?.addEventListener('click', () => {
    const textValueDec = textInput.value;
    const keyValueDec = Number(keyInput.value); 

    output.textContent = `${decryptCaesar(textValueDec,keyValueDec)}`;
});


























//first attempt

// const letters:string [] = ["a","b","c","d", "e", "f","g", "h", "i","j","k","l","m","n", "o", "p","q", "r","s","t","u","v", "w","x","y", "z"];
// console.log(letters);


// encodeBtn?.addEventListener('click', () => {
//     /* console.log(textInput.value.toLowerCase() , keyInput.value); */
//     const textValue:string = textInput.value.toLowerCase();
//     const keyValue:number = Number(keyInput.value);
//     const textValueToArray = Array.from(textValue);
//     console.log(textValueToArray);
//     console.log(textValue);
//     textValueToArray.map()
    
    
//     /* const convertedText = letters.map() */
    
    
// });

// decodeBtn?.addEventListener('click', () => {
//     console.log("decode test"); //nur original input value , 
    
// });



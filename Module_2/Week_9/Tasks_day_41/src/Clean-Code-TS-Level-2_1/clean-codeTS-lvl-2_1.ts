
//original version

// const getNumberText = (num: number | undefined): string =>
//     ['One', 'Two', 'Three', 'Four', 'Five'][num ? num - 1 : 0 - 1] ?? 'Unknown'; /* if 0,6 07 'unknown will be returned */
  
//   const userInput: number = Math.ceil(Math.random() * 7); /* allowing range between 1 and 7 */
//   console.log(userInput);
//   const numberText = getNumberText(userInput);
//   console.log(numberText);
//_____________________________________________________________________________________________

// new clearer version
//(didn't complete by myself, but same idea)

//thought: isn't *7 & 'unknown' maybe unnecessary since the array contains only 5?  
const getNumberText = (num: number) => {
   const numWords: string [] = ['One', 'Two', 'Three', 'Four', 'Five']
      
            return numWords[num-1];
};
const userInput = Math.ceil(Math.random() * 5); /* allow only 5 to match elements in array */
console.log(userInput);

const numberText = getNumberText(userInput);
console.log(numberText);
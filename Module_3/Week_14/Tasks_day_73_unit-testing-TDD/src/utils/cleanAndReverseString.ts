//*Unit-Testing-TDD-Level_1_2

// Function 1st and final version 

 export const cleanAndReverseString = (word:string) => {

    const cleanedString = word.replace(/[^a-zA-Z0-9]/g, '');
    const reversedCleanString = cleanedString.split('').reverse().join(''); 

    return reversedCleanString;
}
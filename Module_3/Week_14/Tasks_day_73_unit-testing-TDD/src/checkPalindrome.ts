//Unit-Testing-TDD-Level_1_1

// * refactored short version 
// not checking for spaces, lower/upperCase, signs

 export const checkPalindrome = (word:string):boolean => {
    return word === word.split('').reverse().join('') ;
};
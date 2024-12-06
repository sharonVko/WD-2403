//Unit-Testing-TDD-Level_1_1

// Es soll eine Funktion checkPalindrome entstehen
//Beschreibung: Schreibe eine Funktion, die überprüft, ob ein gegebener String ein Palindrom ist (d.h., ein String, der vorwärts und rückwärts gleich ist, wie "radar" oder "level"). Ignoriere Leerzeichen, Sonderzeichen und Groß-/Kleinschreibung.

import { checkPalindrome } from "./checkPalindrome";

//* Test suite 

describe('checkPalindrome', () => {

    it('should return "" true if original string is empty', () => {
        const result = checkPalindrome('');
        expect(result).toBe(true);
    });

    it('should return true if there is a palindrome match', () => {
        const result = checkPalindrome('racecar');
        expect(result).toBe(true);
    });

    it('should return false if there is no palindrome match', () => {
        const result = checkPalindrome('pasta');
        expect(result).toBe(false);
    });
   
});


// Function 1st version

const checkPalindromeOld = (word:string):boolean => {
    const splitWord:string [] = word.split('')
    const reverseWord:string [] = splitWord.reverse()
    const joinWordAgain = reverseWord.join('')
    const palindromeMatch:boolean = (joinWordAgain === word) 
    return palindromeMatch;
}; 
checkPalindromeOld('level');



//- refactored version in checkPalindrome.ts file

// ? all tests passed
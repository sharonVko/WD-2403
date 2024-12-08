//* Unit-Testing-TDD-Level_1_2

//- Es soll eine Funktion cleanAndReverseString entstehen
//Beschreibung: Schreibe eine Funktion, die einen gegebenen String umkehrt. Beispiel:
//reverseString("hello") sollte "olleh" zurückgeben. Alle Sonderzeichen sollen vorher entfernt werden. Ziffern sind keine Sonderzeichen wie reverseString(”h?el&o”) = oleh  oder  reverseString(”hello3”) = 3olleh

/* import { cleanAndReverseString } from "./cleanAndReverseString"; */

//* Test suite 

describe('cleanAndReverseString', () => {

    it('should return "" if the original string is empty', () => {
        const result = cleanAndReverseString('');
        expect(result).toEqual('');
    });

    it('should return "olleh" when string "hello" is given', () => {
        const result = cleanAndReverseString('hello');
        expect(result).toEqual('olleh');
    });

    it('should remove special characters like "#?$" if given', () => {
        const result = cleanAndReverseString("#?$");
        expect(result).toEqual('');
    });

    it('should return "3olleh" if "hello3" is given since nurmbers are no special characters', () => {
        const result = cleanAndReverseString("hello3");
        expect(result).toEqual('3olleh');
    });

    it('should return "olleh" even when spaces are given as in "hel lo"', () => {
        const result = cleanAndReverseString('hel lo');
        expect(result).toEqual('olleh');
    });

});


// Function 1st and final version 

const cleanAndReverseString = (word:string) => {

    const cleanedString = word.replace(/[^a-zA-Z0-9]/g, '');
    const reversedCleanString = cleanedString.split('').reverse().join(''); 

    return reversedCleanString;
}
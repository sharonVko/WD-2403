// Unit-Testing-Level_1_1

import { areAnagrams } from "./areAnagrams";

//* opening Test suite:

describe('areAnagrams', () => {

    it('should return true if string is empty', () => {
        const result = areAnagrams('', '');
        expect(result).toEqual(true)
    });

    it ('should return false for strings that do not match as anagram', () => {
        const result = areAnagrams('pineapple', 'apple');
        expect(result).toBe(false);
    })
    it('should return true if strings match as anagram ', () => {
        const result = areAnagrams('listen', 'silent');
        expect(result).toBe(true);
    });

    it ('should return true if upperCase strings match as anagram', () => {
        const result = areAnagrams('LISTEN', 'SILENT');
        expect(result).toBe(true);
    });

    it('should return true if mixed upper and lowerCase strings match as anagram', () => {
        const result = areAnagrams('liSTen','SiLEnt');
        expect(result).toBe(true);
    });

    it ('should return true if there are spaces between words', () => {
        const result = areAnagrams('dormitory', 'dirty room');
        expect(result).toBe(true);
    });

    it('should return true with accents in strings as well', () => {
        const result = areAnagrams('café','face');
        expect(result).toBe(true);
        //? test failed!(result: false) accents cause problems
    })
});

// - Total : 8 of 9 tests passed
// Unit-Testing-Level_2_1

import { evenOdd } from "./evenOdd"

// * Testing suite: 

describe('evenOdd', () => {
    it('should return ["Odd", "Even"] if number is 2', () => {
        const result = evenOdd(2);
        expect(result).toEqual(['Odd', 'Even']);
    });
    
    it('should return ["Odd", "Even","Odd"] if number is 3', () => {
        const result = evenOdd(3);
        expect(result).toEqual(["Odd", "Even","Odd"])
    });

    it('should return [] if number is 0', () => {
        const result = evenOdd(0);
        expect(result).toEqual([]);
    });

    it('should return an empty array [] for negative number', () => {
        const result = evenOdd(-5);
        expect(result).toEqual([]);
    });
    
})

//* Total : all tests passed


    
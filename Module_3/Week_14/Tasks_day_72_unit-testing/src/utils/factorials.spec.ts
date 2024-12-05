// Unit-Testing-Level_1_2

import { factorial } from "./factorials";

//* opening Test suite: 

describe('factorial', () => {

    it('should return 1 if factorial is 0', () => {
        const result = factorial(0);
        expect(result).toBe(1);
    });

    it ('should return 120 for factorial of 5', () => {
        const result = factorial(5);
        expect(result).toBe(120);
    });

    it('should return 10 for large factorial number 3628800', () => {
        const result = factorial(10);
        expect(result).toBe(3628800);
    })

    it ('should return null if factorial is null', () => {
        const result = factorial(null as unknown as number);
        expect(result).toBeNull()
    }) // ? test failed (would have to make changes in function -> throw new error, then test with .toThrow())
})

// - Total : 3 of 4 tests passed
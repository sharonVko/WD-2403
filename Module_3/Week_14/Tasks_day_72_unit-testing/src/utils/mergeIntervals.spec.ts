//Unit-Testing-Level_2_2

import mergeIntervals from "./mergeIntervals"

//* Test suite:

describe('mergeIntervals', () => {

    it('should return an empty array [] if there is no input value  ', () => {
        const result = mergeIntervals([]);
        expect(result).toEqual([]);
    });

    it('should return the exact interval [1,3] as input value', () => {
        const result = mergeIntervals([[1,3]]);
        expect(result).toEqual([[1,3]]);
    })
})
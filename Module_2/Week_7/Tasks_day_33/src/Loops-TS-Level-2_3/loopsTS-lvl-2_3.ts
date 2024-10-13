console.log("practice loops + arrays");

const getNumberOfVowels = (arr:string): number =>{ /* declaring the function */

    const vowels = ["a", "e","i","o","u","A","E","I","O","U"]; /* creating array with alle the vowels, lower and uppercase */
    let count = 0; /* counter variable to save the amount of vowels, start value 0 */
    
    for(let letters of arr) { /* running through each letter of the string with this loop */
        if(vowels.includes(letters)){ /* checking each letter for vowels */
            count++; /* counting 1 up, for every vowel that was found */
        };
    };
    return count; /* return the result of the count */
};

console.log(getNumberOfVowels("helloooooo, is it me you're lookin' for?")); /* console returns: 17 */

console.log(getNumberOfVowels("A B C, It's easy as 1 2 3, as simple as do re mi, A B C, 1 2 3, baby you and me, girl")); /* console returns: 19 */

console.log(getNumberOfVowels("YOoO")); /* console returns: 3 */

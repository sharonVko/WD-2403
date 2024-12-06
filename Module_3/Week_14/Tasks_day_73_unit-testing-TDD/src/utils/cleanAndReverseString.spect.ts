//- Es soll eine Funktion cleanAndReverseString entstehen
//Beschreibung: Schreibe eine Funktion, die einen gegebenen String umkehrt. Beispiel:
//reverseString("hello") sollte "olleh" zurückgeben. Alle Sonderzeichen sollen vorher entfernt werden. Ziffern sind keine Sonderzeichen wie reverseString(”h?el&o”) = oleh  oder  reverseString(”hello3”) = 3olleh

//* Test suite 

describe('cleanAndReverseString', () => {

    it('should return "" if the original string is empty', () => {
        const result = cleanAndReverseString('');
        expect(result).toEqual('');
    });


});


// Function 1st version 

const cleanAndReverseString = (word:string) => {
    
}
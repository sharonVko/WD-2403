//* Unit-Testing-TDD-Level_2_1

// - Es soll eine Funktion getCharacterFrequency entstehen
//-Beschreibung: Schreibe eine Funktion, die die Häufigkeit jedes Zeichens in einem String zählt und das Ergebnis als //Objekt zurückgibt. Beispiel: "hello" sollte { h: 1, e: 1, l: 2, o: 1 } zurückgeben.
//- "" sollte {} zurückgeben.
//- "aab" sollte { a: 2, b: 1 } zurückgeben.
//- "Aab" sollte { a: 2, b: 1 } zurückgeben (Groß-/Kleinschreibung  nicht berücksichtigen)

//* Test suite

describe ('getCharacterFrequency', () => {

    it('should return "{}" when empty string is given', () => {
        const result = getCharacterFrequency('');
        expect(result).toEqual('{}');
    });
    
})

// Function 1st version

const getCharacterFrequency = (str:string):string => {

   
    return str
}
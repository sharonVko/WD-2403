//- Lege eine Datei an: alcohol.ts
//- Erstelle dort zwei Types, Alcohol und Mixer, die jeweils Eigenschaften für alkoholische Getränke und Mischgetränke definieren.

//- Alcohol hat die Eigenschaften: name, percentage und type
export type TAlcohol = {
    _name:string;
    _percentage:string;
    _type: string;
};

//Mixer hat die Eigenschaften: name, type und carbonated
export type TMixer = {
    _name:string;
    _type: string;
    _carbonated: boolean;
};

//Lege anschließend einen Intersection-Typ namens Cocktail an, der sowohl die Eigenschaften von Alcohol als auch von Mixer enthält.
export type TCocktail = TAlcohol & TMixer; 
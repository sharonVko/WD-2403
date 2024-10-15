console.log("practice objects and methods");

type EdelmetallPreis = {
    name: string;
    preiseGramEuro: number;
    veraenderung: string;
};

let edelMetallPreise: EdelmetallPreis[] = [
    { name: "Gold", preiseGramEuro: 42.91, veraenderung: "+0.12%" },
    { name: "Silber", preiseGramEuro: 0.51, veraenderung: "+1.02%" },
    { name: "Platin", preiseGramEuro: 25.74, veraenderung: "+0.41%" },
    { name: "Palladium", preiseGramEuro: 50.93, veraenderung: "0.00%" },
    { name: "Rhodium", preiseGramEuro: 160.12, veraenderung: "-0.10%" },
    { name: "Iridium", preiseGramEuro: 42.84, veraenderung: "0.00%" },
    { name: "Ruthenium", preiseGramEuro: 7.36, veraenderung: "0.00%" },
    { name: "Rhenium", preiseGramEuro: 37.22, veraenderung: "-0.53%" },
    { name: "Osmium", preiseGramEuro: 11.54, veraenderung: "0.00%" }
];

console.log(edelMetallPreise);

/* - Lernziel: Erkennen der Unterschiede in der Anwendung von map() und forEach() für den gleichen Anwendungsfall.
- **Bitte halte dich an den Typescript-Standard.**
- Greife auf die Objekte im Array mithilfe von map(), forEach(), und filter() zu und gebe Schritt für Schritt die Anweisungen in der Konsole aus.
- */


//Verwende forEach() und greife auf alle name zu. Pushe diese in ein neues Array.
const eachNameMetal: string [] = [];
edelMetallPreise.forEach((metalname) => eachNameMetal.push(metalname.name));
console.log(eachNameMetal); /* console returns: (9) ['Gold', 'Silber', 'Platin', 'Palladium', 'Rhodium', 'Iridium', 'Ruthenium', 'Rhenium', 'Osmium'] */

//Verwende map() und greife auf alle name zu.
const mapNameMetal : string [] = edelMetallPreise.map((getname) => getname.name);
console.log(mapNameMetal); /* console returns: (9) ['Gold', 'Silber', 'Platin', 'Palladium', 'Rhodium', 'Iridium', 'Ruthenium', 'Rhenium', 'Osmium'] */

//Verwende forEach() und greife auf alle preiseGramEuro zu und pushe diese in ein neues Array.

const eachMetalPrice: number [] = [];
edelMetallPreise.forEach((metalprice) => eachMetalPrice.push(metalprice.preiseGramEuro));
console.log(eachMetalPrice); /* console returns: (9) [42.91, 0.51, 25.74, 50.93, 160.12, 42.84, 7.36, 37.22, 11.54] */

//Verwende map() und greife auf alle preiseGramEuro zu.
const mapMetalPrice: number [] = edelMetallPreise.map((getPrice) => getPrice.preiseGramEuro);
console.log(mapMetalPrice); /* console returns: (9) [42.91, 0.51, 25.74, 50.93, 160.12, 42.84, 7.36, 37.22, 11.54] */

//Verwende forEach() und greife auf alle veraenderung zu und pushe diese in ein neues Array.

const eachMetalChange: string [] = [];
edelMetallPreise.forEach((metalchange) => eachMetalChange.push(metalchange.veraenderung));
console.log(eachMetalChange); /* console returns: (9) ['+0.12%', '+1.02%', '+0.41%', '0.00%', '-0.10%', '0.00%', '0.00%', '-0.53%', '0.00%'] */

//Verwende map() und greife auf alle veraenderung zu.

const mapMetalchange:string [] = edelMetallPreise.map((getChange) => getChange.veraenderung);
console.log(mapMetalchange); /* console rturns: (9) ['+0.12%', '+1.02%', '+0.41%', '0.00%', '-0.10%', '0.00%', '0.00%', '-0.53%', '0.00%'] */

//Verwende filter() und greife auf preiseGramEuro, die teurer als 50 Euro sind, zu.

const filterPrice: number [] = mapMetalPrice.filter(mapMetalPrice )

/* will continue to solve tomorrow! .... */ 
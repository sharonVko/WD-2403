

//- Lernziel: Funktionen mit Default-Parametern nutzen

// Lege einen Typ Monster mit folgenden Eigenschaften an
//name, type, health, strength, speed

type TMonster = {
    name: string,
    type: string,
    health: number,
    strength: number,
    speed: number
} 

// - werden health, strength und speed nicht angegeben, sollen diese Standardwerte verwendet werden
//health = 100,strength = 50, speed = 25

const createMonster = (name:string, type:string, health?:number, strength?:number, speed?:number):TMonster => {
    let defaultMonster: TMonster = { 
            name: name,
         type: type,
         health: health?? 100,
         strength: strength?? 50,
         speed: speed?? 25
        };
        return defaultMonster;
};
// Lege mit Hilfe der Funktion mehrere Monster an, gebe dabei 2,3,4, & 5 Parameter an.Lass dir jeweils das erzeugte Objekt in der Konsole ausgeben
console.log(createMonster("Frankenstein", "Creature")); /* console returns: {name: 'Frankenstein', type: 'Creature', health: 100, strength: 50, speed: 25} */
console.log(createMonster("Godzilla", "Monster", 85)); /* console returns: {name: 'Godzilla', type: 'Monster', health: 85, strength: 50, speed: 25} */
console.log(createMonster("Dracula", "Vampire", 66, 72));/* console returns: {name: 'Dracula', type: 'Vampire', health: 66, strength: 72, speed: 25} */
console.log(createMonster("Blob", "Alien", 33, 87, 91)); /* console returns: {name: 'Blob', type: 'Alien', health: 33, strength: 87, speed: 91}*/


//- Erstelle eine Datei alien.ts
//- Deklariere eine Klasse Alien
//- Der Konstruktor soll die Parameter name und color haben
//- Lege vier Eigenschaften an:
//- name (string)
//- planet (string)
//- galaxy (string)
//- color (string)
//- name, planet und galaxy sollen public sein
//- color soll private sein
//- Schreibe für color einen Getter  --> see Alien.ts

import Alien from "./Alien"

//Lege dort 3 Alien-Arten an und setze alle Eigenschaften


const eT = new Alien ("E.T. the Extra Terrestrial","Brodo Asogi (The Green Planet)", "Triangulum","grey");
const alf = new Alien("Alf", "Melmac","Andromeda","brown");
const jabba = new Alien ("Jabba the hutt","Tatooine", "Outer Rim","green/brown/grey");

console.log(eT, alf,jabba);

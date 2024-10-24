
import SchoolClass from './SchoolClass';

const schoolClassJunior = new SchoolClass("Kids","grade 4", 2025);

const schoolClassMiddle = new SchoolClass("Teens", "Level 2", 2026);

const schoolClassSenior = new SchoolClass ("Senior", "Final");

console.log(schoolClassJunior, schoolClassMiddle, schoolClassSenior);

schoolClassJunior._name = "Teenies";
console.log(schoolClassJunior._name); // console returns: Teenies

schoolClassSenior._name = "Graduates";
console.log(schoolClassSenior._name); // console returns: Graduates 


//__________*** OOP-Class-TS-Level-2_1 *** __________


//c) Teste deine Klassen und Methoden in der app.ts. Erstelle eine Schulklasse und füge mehrere Personen hinzu

const SchoolClassPreSchool = new SchoolClass("Pre-School", "Toddlers", []);

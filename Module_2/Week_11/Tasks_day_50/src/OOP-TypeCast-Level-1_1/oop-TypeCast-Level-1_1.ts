console.log("test");

import IStudent from "./contracts/IStudent";

//- Schreibe dort eine Funktion processStudent(student: IStudent) an
//- Die Funktion gibt “Processing [student.name] …” auf der Konsole aus

const processStudent = ((student: IStudent):void => {
    console.log(`Processing ${student._name} …`); //console returns: Processing Ferris Bueller …
    
});
console.log();

//- Lege ein Objekt student1 mit den Eigenschaften name und age an
//- Wandle das Objekt mit as in IStudent um
const student1 = { _name : "Ferris Bueller", _age: 16 } as IStudent

//- Übergebe das Objekt an die Funktion processStudent
processStudent(student1); // call the function

//- Lege ein zweites Objekt student2 mit der Eigenschaft age an
//- Wandle das Objekt in einen IStudent um
const student2 = { _age: 17} as IStudent;

//Übergebe das Objekt an die Funktion processStudent
//Schreibe in einen Code-Kommentar was im zweiten Fall angezeigt/ausgegeben wird
processStudent(student2) // console returns: Processing undefined (because we ask for the name and not the age in template literal)

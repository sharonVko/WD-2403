// Lege in einer neuen Datei eine Klasse mit dem Namen SchoolClass an
import Person from "./Person";

class SchoolClass {
     _name: string; 
     _id : string;
     _endDate? : number;
     //b) Füge der Klasse SchoolClass ein weiteres Attribut/eine Eigenschaft hinzu, und zwar ein Array aus Personen. 
     _students : Person[];




     constructor(name:string, id:string, students: Person[], endDate?:number) {//had to change position of date parameter due to error, this leads to errors in school classes variables in oop_classTs file
        this._name = name;
        this._id = id;
        this._endDate = endDate;
        //------ b)
        this._students = students;

        console.log("School class creation successful");
     }
}




export default SchoolClass;
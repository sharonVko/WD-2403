import IEmployee from "../contracts/IEmployee";
// Level 2_2
//- Lege eine neue Datei trainee.ts an
//- Erstelle dort eine Klasse Trainee, die das Interface IEmployee implementiert
//- Die Position soll immer automatisch mit “Trainee” befüllt werden

class Trainee implements IEmployee{
    _name: string;
    _age: number;
    _position: string = "Trainee";
    _startDate: Date;

    constructor(name:string, age: number, startDate: Date){
        this._name = name;
        this._age = age;
        this._startDate = startDate; 
    }
    getYearsOfService(): number{
    
            const currentYear:number = new Date().getFullYear();
            const startYear:number = this._startDate.getFullYear();
            return currentYear - startYear;
        
    }
};

export default Trainee;
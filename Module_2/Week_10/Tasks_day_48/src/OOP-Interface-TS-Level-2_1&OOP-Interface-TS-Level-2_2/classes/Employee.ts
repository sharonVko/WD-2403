import IEmployee from "../contracts/IEmployee";

//level 2_2
//- Wir wollen doppelten Code für die Logik der Dienstjahresberechnung vermeiden und lagern deshalb die Methode in eine Basisklasse Employee aus
//- Lege dazu eine neue Datei employee.ts und eine Klasse Employee, die das Interface IEmployee implementiert
//Die Klassen Manager, Trainee und Subordinate sollen jetzt direkt von der Klasse Employee ableiten

class Employee implements IEmployee{
    _name: string;
    _age: number;
    _position: string;
    _startDate: Date;
    getYearsOfService: () => number;

    constructor(name: string, age:number, startDate: Date){
        this._name = name;
        this._age = age;
        this._startDate = startDate;
        this._position = ""
    }
};

export default Employee;

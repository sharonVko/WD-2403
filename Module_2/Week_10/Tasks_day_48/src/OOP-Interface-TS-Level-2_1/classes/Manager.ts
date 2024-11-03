import IEmployee from '../contracts/IEmployee';

// 2- Lege dort eine Klasse Manager an, die das Interface IEmployee implementiert
//- Die Klasse Manager hat eine zusätzliche private Eigenschaft assignedEmployees (Array von IEmployee)

class Manager implements IEmployee{
    _name: string;
    _age: number;
    _position: string;
private _assignedEmployees: IEmployee[] = [];

constructor(name:string, age:number,position:string) {
    this._name = name;
    this._age = age;
    this._position = position;

};

// 4- Erstelle nun eine Methode in der Klasse Manager namens addSubordinate mit einem Parameter vom Typ IEmployee
//- Die Methode soll den übergebenen IEmployee in das Array assignedEmployees hinzufügen
addSubordinate (employee:IEmployee):void {
    this._assignedEmployees.push(employee);
};
}; 

export default Manager;
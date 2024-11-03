import IEmployee from "../contracts/IEmployee";

//3- Lege in einer neuen Datei subordinate.ts an
//- Erstelle dort eine Klasse Subordinate, die das Interface IEmployee implementiert
class Subordinate implements IEmployee{
    _name: string;
    _age: number;
    _position: string;

    constructor(name:string, age:number, position:string){
        this._name = name;
        this._age = age;
        this._position = position;
    }

};

export default Subordinate;
console.log("test");

//! OOP-Class-TS-Level-2_2



class Car {
    _brand: string;
    _constructionYear: number;
    _currentSpeed: number;


    constructor (marke: string, baujahr: number, currentSpeed:number) {
        this._brand = marke;
        this._constructionYear = baujahr;
        this._currentSpeed = currentSpeed
    }
}

//Instanzen
const mercedes = new Car ("mercedes benz", 2003,190);
console.log(mercedes); // console returns : Car {_brand: 'mercedes benz', _constructionYear: 2003, _currentSpeed: 190}

const porsche = new Car ("Porsche", 2023,294);
console.log(porsche);

const opel = new Car ("Opel", 1983,140);
console.log(opel);


class Driver {
    _firstName: string;
    _lastName : string;
    _age: number;
    _car: Car; // class Car wird hier eingesetzt


constructor(firstName:string, lastName:string, age:number, car:Car) { // class Car wird hier auch als "typisierung" für den Parameter genutzt
    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age;
    this._car = car;
}

}

const michaela = new Driver("Michaela", "Schmidt",32,mercedes);
const bernd = new Driver("Bernd", "Mustermann",82,porsche);
const till = new Driver("Till", "Schweiger",55,opel);

console.log(michaela,bernd,till); // console returns : Driver {_firstName: 'Michaela', _lastName: 'Schmidt', _age: 32, _car: Car} etc.

console.log(till._age); // console returns : 55
console.log(till._car._currentSpeed); // console returns : 140
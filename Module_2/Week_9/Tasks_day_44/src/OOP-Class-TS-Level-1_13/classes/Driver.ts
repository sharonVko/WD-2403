import Car from "./Car";
/* import CarType from './CarType'; */

class Driver {
    _firstName: string;
    _lastName : string;
    _age: number;
    _car: Car; // class Car wird hier eingesetzt
    private _licenseFromYear: number; // in der Klasse Driver soll es eine weitere Eigenschaft licenseFromYear: number geben, die nur über den Konstruktor gesetzt werden kann (-> Wert ist nur über einen Getter (get-Methode) abrufbar) & (see in Car.ts) soll es eine Methode getCarType(): CarType geben, die den CarType des aktuellen Autos als Text ausgibt



constructor(firstName:string, lastName:string, age:number, car:Car, license:number) { // class Car wird hier auch als "typisierung" für den Parameter genutzt
    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age;
    this._car = car;
    this._licenseFromYear = license
};

//get method for license
get license () {
    return this._licenseFromYear
};


};

export default Driver;
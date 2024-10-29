// 1- Erstelle eine neue Klasse Beverage in einer Datei beverage.ts
// 2- Die Klasse hat die Eigenschaften name (string) und price (number)

class Beverage {
    _name : string;
    _price : number;

    constructor(name:string, price:number){
        this._name = name;
        this._price = price;
    }
};


export default Beverage;
import Beverage from "./Beverage";

// 3.- Leite eine neue Klasse Coffee davon ab (coffee.ts)
// 4.- Die Klasse hat die zusätzliche Eigenschaft type vom Datentyp Enum
//→ Werte sind: Espresso, Latte, Cappuccino und Americano

export enum CoffeeType {
    Espresso,
    Latte,
    Cappuccino,
    Americano
}





class Coffee extends Beverage {
     _type: CoffeeType;

     constructor(name:string, price:number,type: CoffeeType) {
        super(name,price);
        this._type = type;
     };
};



export default Coffee;
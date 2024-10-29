import Beverage from "./Beverage";

// 5.- Erstelle eine weitere abgeleitete Klasse Tea
// 6.- Füge eine Eigenschaft flavor vom Datentyp Enum hinzu
//→ Werte sind: Green, Black, Chai, Peppermint

export enum TeaFlavor {
    Green, 
    Black, 
    Chai, 
    Peppermint
};

class Tea extends Beverage {
    _type: TeaFlavor;

    constructor(name:string,price:number,type:TeaFlavor) {
        super(name,price);
        this._type = type;
    };
};


export default Tea;
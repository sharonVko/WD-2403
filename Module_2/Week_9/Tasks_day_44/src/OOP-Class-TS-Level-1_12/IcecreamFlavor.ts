class IcecreamFlavor {
    _name: string = '';
    _price: number = 0;
    _isPopular: boolean = false;
    _description?: string = undefined; //description is optional!
   

constructor (name:string, price:number, isPopular: boolean, description?:string) {
    this._name = name;
    this._price = price;
    this._isPopular = isPopular;
    this._description = description;
    
}

//Die Klasse soll drei Methoden bekommen

//getTotalPrice(numberOfScoops: number)
//→ gibt den Gesamtpreis anhand der übergebenen Anzahl an Eiskugeln auf der Konsole aus

// method 1
getTotalPrice(numberOfScoops:number) {
    console.log(numberOfScoops * this._price);
};

//printInfo()
//→ gibt z. B. Folgendes auf der Konsole aus

//method 2
printInfo():void{
console.log(`Flavor ${this._name} is popular and costs ${this._price} €.`);
}

//getLengthOfDescription()
//→ gibt die Textlänge von description aus oder 0, wenn die Eigenschaft nicht gesetzt ist

// method 3
getLengthOfDescription(){
    const length = this._description?.length
    if (this._description){
        console.log(length);
        
    } else {
        console.log("0");
        
    }
}

}




export default IcecreamFlavor;
//Step 1-3 (4-6 in oop-classTS-lvl-1_1)
//- Lege in einer neuen Datei eine Klasse mit dem Namen IceCreamFlavor an
//- Die Klasse soll folgende Attribute haben
//- name: string
//- price: number
//- isPopular: boolean
//- description: string → optional
//- name soll beim Anlegen ‘’ sein, price = 0, isPopular = false und description = undefined


class IcecreamFlavor {
    _name: string = '';
    _price: number = 0;
    _isPopular: boolean = false;
    _description?: string = undefined; //description is optional!

constructor (name:string, price:number, isPopular: boolean, description?:string) {
    this._name = name;
    this._price = price;
    this._isPopular = isPopular;
    this._description = description
}

}

export default IcecreamFlavor;
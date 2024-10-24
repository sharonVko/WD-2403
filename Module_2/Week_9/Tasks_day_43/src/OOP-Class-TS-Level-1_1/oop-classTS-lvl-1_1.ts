import IcecreamFlavor from "./IcecreamFlavor";

//- Lege 4 Instanzen von IceCreamFlavor an und setze deren Eigenschaften
//- Lege die 4 Instanzen in einem Array ab
//- Lass dir von allen populären Eissorten (isPopular) den Namen auf der Konsole ausgeben

const pineapple = new IcecreamFlavor("Pineapple",1, false); 

console.log(pineapple); // console returns: IcecreamFlavor {_name: 'Pineapple', _price: 1, _isPopular: false, _description: undefined}

const watermelon = new IcecreamFlavor("Watermelon", 1, true, "sorbet, vegan");

const mintChoc = new IcecreamFlavor("Mint- Chocolate", 2, true,"chunks of dark chocolate and After Eight, dairy");

const tiramisu = new IcecreamFlavor("Tiramisu", 2, true, "pieces of Tiramisu cake, contains alcohol, dairy");

console.log(watermelon, mintChoc, tiramisu);
// console returns each object, tiramisu for example: IcecreamFlavor {_name: 'Tiramisu', _price: 2, _isPopular: true, _description: undefined}

const flavorsInStore:IcecreamFlavor [] = [pineapple, watermelon,mintChoc,tiramisu];

flavorsInStore.forEach((ice:IcecreamFlavor)=> {
    /* console.log(ice._isPopular); */
   if(ice._isPopular === true){ /* in short just: (ice._isPopular) */
    console.log(ice._name); /* console returns only true icecream flavors:  Watermelon
    oop-classTS-lvl-1_1.ts:21 Mint- Chocolate
    oop-classTS-lvl-1_1.ts:21 Tiramisu*/
    
   }

})


/* console.log(flavorsInStore) */; // console returns: (4) [IcecreamFlavor, IcecreamFlavor, IcecreamFlavor, IcecreamFlavor]
0
// : 
// IcecreamFlavor {_name: 'Pineapple', _price: 1, _isPopular: false, _description: undefined}
// 1
// : 
// IcecreamFlavor {_name: 'Watermelon', _price: 1, _isPopular: true, _description: undefined}
// 2
// : 
// IcecreamFlavor {_name: 'Mint- Chocolate', _price: 2, _isPopular: true, _description: undefined}
// 3
// : 
// IcecreamFlavor {_name: 'Tiramisu', _price: 2, _isPopular: true, _description: undefined}
// length
// : 
// 4
// [[Prototype]]
// : 
// Array(0)

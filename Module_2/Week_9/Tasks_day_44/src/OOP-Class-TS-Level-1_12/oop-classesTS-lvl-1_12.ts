import IcecreamFlavor from "./IcecreamFlavor";

const pineapple = new IcecreamFlavor("Pineapple",1, false); 


const watermelon = new IcecreamFlavor("Watermelon", 1, true, "sorbet, vegan");

const mintChoc = new IcecreamFlavor("Mint- Chocolate", 1.50, true,"chunks of dark chocolate and After Eight, dairy");

const tiramisu = new IcecreamFlavor("Tiramisu", 2, true, "pieces of Tiramisu cake, contains alcohol, dairy");



//call method 1
mintChoc.getTotalPrice(2); //console returns: 3
watermelon.getTotalPrice(2)// console reurns: 2 

//call method 2
tiramisu.printInfo()// console returns: Flavor Tiramisu is popular and costs 2 €.

//call method 3
pineapple.getLengthOfDescription() // console returns: 0
mintChoc.getLengthOfDescription() // console returns: 47
tiramisu.getLengthOfDescription() // console returns: 48
watermelon.getLengthOfDescription() // console returns: 13


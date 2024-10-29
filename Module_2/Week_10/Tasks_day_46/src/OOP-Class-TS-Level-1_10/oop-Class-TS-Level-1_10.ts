import Beverage from "./Beverage";
import Tea from "./Tea";
import Coffee from "./Coffee";
import { CoffeeType } from "./Coffee";
import { TeaFlavor } from "./Tea";

console.log("test");
// 1- Erstelle eine neue Klasse Beverage in einer Datei beverage.ts ....

// 7. Lege in der Hauptdatei verschiedene Instanzen von Beverage, Coffee und Tea an
const mocca = new Beverage("Mocca",3.50);
const frappuccino = new Beverage("Frappuccino",4.50);
const lemonade = new Beverage("Homemade Lemonade",2.90);

console.log(mocca,frappuccino,lemonade); // console returns: Beverage {_name: 'Mocca', _price: 3.5} Beverage {_name: 'Frappuccino', _price: 4.5} Beverage {_name: 'Homemade Lemonade', _price: 2.9}


const chaiLatte = new Tea("Chai Latte",3.50,TeaFlavor.Chai);
const gingerTea = new Tea("Ginger Tea", 2.50, TeaFlavor.Green);
const herbalTea = new Tea("Herbal Tea", 1.95, TeaFlavor.Green);

console.log(chaiLatte,gingerTea,herbalTea); // console returns: tea {_name: 'Chai Latte', _price: 3.5, _type: 2}_name: "Chai Latte"_price: 3.5_type: 2[[Prototype]]: Beverage Tea {_name: 'Ginger Tea', _price: 2.5, _type: 0} Tea {_name: 'Herbal Tea', _price: 1.95, _type: 0}


const icedLatte = new Coffee("Iced Latte", 3.75, CoffeeType.Latte);
const caramelLatte= new Coffee("Caramel Latte", 3.95, CoffeeType.Latte);

console.log(icedLatte,caramelLatte); // console returns: Coffee {_name: 'Iced Latte', _price: 3.75, _type: 1} Coffee {_name: 'Caramel Latte', _price: 3.95, _type: 1}



console.log("practice enums");


enum PizzaSize {

    Small , 
    Medium ,
    Large,
    Familie
}

console.log(PizzaSize);
console.log(PizzaSize.Large);


enum PizzaIngredients {
    Cheese = "Cheese",
    Onion = "Onion" ,
    Salami = "Salami",
    Olives = "OLives",
    Eggplant = "Eggplant",
    Tuna = "Tuna",
    Mushrooms = "Mushrooms",
    Corn ="Corn" ,
    Feta = "Feta",
    Garlic = "Garlic"
}
console.log(PizzaIngredients);

type Pizza = {
    size: PizzaSize;
    ingredients: PizzaIngredients[];
};

const cheesePizza: Pizza = { 
    size: PizzaSize.Medium,
    ingredients: [PizzaIngredients.Cheese, PizzaIngredients.Feta, PizzaIngredients.Garlic],
};
console.log(cheesePizza); /* console shows ingredients as strings and size as index number */


const tunaPizza: Pizza = {
    size: PizzaSize.Small,
    ingredients: [PizzaIngredients.Corn, PizzaIngredients.Cheese, PizzaIngredients.Onion, PizzaIngredients.Tuna]
};
console.log(tunaPizza); /* console returns : {size: 0, ingredients: Array(4)}ingredients: Array(4)0: "Corn"1: "Cheese"2: "Onion"3: "Tuna"length: 4[[Prototype]]: Array(0)size: 0[[Prototype]]: Object */

const eggplantPizza: Pizza = {
    size: PizzaSize.Familie,
    ingredients: [PizzaIngredients.Cheese, PizzaIngredients.Eggplant, PizzaIngredients.Feta, PizzaIngredients.Garlic]
};
console.log(eggplantPizza);

const  greekstylePizza: Pizza = {
    size: PizzaSize.Large,
    ingredients: [PizzaIngredients.Cheese, PizzaIngredients.Feta, PizzaIngredients.Olives, PizzaIngredients.Onion, PizzaIngredients.Garlic]
};
console.log(greekstylePizza);

console.log("practice forEach");

let getraenke: string[] = [
    "Coca-Cola",
    "Apfelsaft",
    "Pepsi",
    "Traubensaft",
    "Sprite",
    "Orangensaft",
    "Red Bull Energy Drink",
    "Fanta"
];

console.log(getraenke);

const sortedGetraenke: string[] = getraenke.sort();
console.log(sortedGetraenke); /* console returns: (8) ['Apfelsaft', 'Coca-Cola', 'Fanta', 'Orangensaft', 'Pepsi', 'Red Bull Energy Drink', 'Sprite', 'Traubensaft'] */

const drinklist = document.querySelector('#drinklist') as HTMLElement;

 sortedGetraenke.forEach(drink => {
    if(drinklist){
    drinklist.innerHTML += `<li>${drink}</li>`
    }

 });
console.log("practice map() ");


const drinks = ['Coca-Cola', 'Apfelsaft', 'Pepsi', 'Traubensaft', 'Sprite', 'Orangensaft', 'Red Bull Energy Drink', 'Fanta'];

console.log(drinks);

/* - Nutze die map()-Methode, um in einer neuen Variable upperDrinks alle Getränke in Großbuchstaben zu speichern.
- Gib upperDrinks in der Konsole aus.
 */

const upperDrinks: string [] = drinks.map((drink) => drink.toLocaleUpperCase());
console.log(upperDrinks); /* console returns: (8) ['COCA-COLA', 'APFELSAFT', 'PEPSI', 'TRAUBENSAFT', 'SPRITE', 'ORANGENSAFT', 'RED BULL ENERGY DRINK', 'FANTA'] */


/* - Nutze die Map-Methode um für jedes Element auf der Konsole folgendes auszugeben:
‘I like [drink]’ */
drinks.map((getraenk)=> {
    console.log(`I like ${getraenk}`);
});   /* console returns: I like Coca-Cola
arrayTS-lvl-1_2.ts:13 I like Pepsi
arrayTS-lvl-1_2.ts:13 I like Apfelsaft
arrayTS-lvl-1_2.ts:13 I like Traubensaft
arrayTS-lvl-1_2.ts:13 I like Sprite
arrayTS-lvl-1_2.ts:13 I like Orangensaft
arrayTS-lvl-1_2.ts:13 I like Red Bull Energy Drink
arrayTS-lvl-1_2.ts:13 I like Fanta */
 
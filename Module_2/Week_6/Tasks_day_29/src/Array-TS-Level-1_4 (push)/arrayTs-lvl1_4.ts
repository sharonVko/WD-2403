/* Erstelle ein Array und ergänze es mit der Array-Methode push(). 
Mit push() kannst du einen oder mehrere Werte gleichzeitig an das Ende eines Arrays hinzufügen. */

const bucketList: string [] = ["Mexico", "Thailand", "Island"];
console.log(bucketList);

const luckyNumbers :number [] = [ 9,13,21];
console.log(luckyNumbers);

const favoritePeople: string [] = ["Lamia", "Moritz", "und alle anderen"];
console.log(favoritePeople);

bucketList.push("Mauritius");
console.log(bucketList); /* console returns: (4) ['Mexico', 'Thailand', 'Island', 'Mauritius'] */

bucketList.push("Kuba", "Japan");
console.log(bucketList); /* console returns: (6) ['Mexico', 'Thailand', 'Island', 'Mauritius', 'Kuba', 'Japan'] */

luckyNumbers.push(29);
console.log(luckyNumbers); /* console returns: (4) [9, 13, 21, 29] */

favoritePeople.push("natürlich inklusive Trainer");
console.log(favoritePeople); /* console returns: (4) ['Lamia', 'Moritz', 'und alle anderen', 'natürlich inklusive Trainer'] */



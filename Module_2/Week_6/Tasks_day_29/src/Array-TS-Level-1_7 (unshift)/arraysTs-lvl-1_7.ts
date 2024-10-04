console.log("hola");

/* Die Array-Methode unshift() ist push() sehr ähnlich. Denn unshift() fügt auch einen Wert zu einem Array hinzu, dieses mal allerdings an erster Stelle. Es ist möglich einen oder mehrere Werte mit unshift() am Anfang eines Arrays einzufügen. Die anderen Werte werden mit ihrem Index um Anzahl der neu hinzugefügten Werte erhöht. */

const bucketList: string [] = ["Mexico", "Thailand", "Island","Mauritius","Kuba", "Japan"];
console.log(bucketList);

const luckyNumbers: number [] = [ 9,13,21,29];
console.log(luckyNumbers);

const favoritePeople: string [] = ["Lamia", "Moritz", "und alle anderen","natürlich inklusive Trainer"];
console.log(favoritePeople);

bucketList.unshift("Sri Lanka", "Costa Rica");
console.log(bucketList); /* console returns: (8) ['Sri Lanka', 'Costa Rica', 'Mexico', 'Thailand', 'Island', 'Mauritius', 'Kuba', 'Japan'] */

luckyNumbers.unshift(2);
console.log(luckyNumbers); /* console returns: (5) [2, 9, 13, 21, 29] */

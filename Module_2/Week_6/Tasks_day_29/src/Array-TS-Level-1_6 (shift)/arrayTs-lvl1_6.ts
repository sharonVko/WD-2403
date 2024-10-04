console.log("yo");

/* Die Array-Methode shift() ist pop() sehr ähnlich. Denn shift() entfernt auch einen Wert aus einem Array, dieses Mal allerdings den ersten Wert. Hierbei wird der erste Wert entfernt und die anderen Werte rücken mit ihrem Index einen nach vorne. */

const bucketList: string [] = ["Mexico", "Thailand", "Island","Mauritius","Kuba", "Japan"];
console.log(bucketList);

const luckyNumbers :number [] = [ 9,13,21,29];
console.log(luckyNumbers);

const favoritePeople: string [] = ["Lamia", "Moritz", "und alle anderen","natürlich inklusive Trainer"];
console.log(favoritePeople);

/* favoritePeople.shift();
console.log(favoritePeople); */ /* console returns: 
(3) ['Moritz', 'und alle anderen', 'natürlich inklusive Trainer'] */

let firstPerson = favoritePeople.shift();
console.log(firstPerson); /* console returns: Lamia */

let firstNumber = luckyNumbers.shift();
console.log(firstNumber); /* console returns: 9 */

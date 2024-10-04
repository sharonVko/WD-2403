console.log("hi hi");

const bucketList: string [] = ["Mexico", "Thailand", "Island","Mauritius","Kuba", "Japan"];
console.log(bucketList);

const luckyNumbers :number [] = [ 9,13,21,29];
console.log(luckyNumbers);

const favoritePeople: string [] = ["Lamia", "Moritz", "und alle anderen","natürlich inklusive Trainer"];
console.log(favoritePeople);

/* Wer hinzufügt, der muss es auch wieder entfernen können. Dafür wird die Array-Methode pop() genutzt. Bei pop() wird der letzte Wert von einem Array entfernt und der entfernte Wert wird zurückgegeben. */

console.log(bucketList); /* console returns: (6) ['Mexico', 'Thailand', 'Island', 'Mauritius', 'Kuba', 'Japan']  */

bucketList.pop();
console.log("übrig bleiben: " + bucketList); /* console returns: übrig bleiben: Mexico,Thailand,Island,Mauritius,Kuba  */

const removedFromBucketList = bucketList.pop();
console.log("entfernt wurde: "+ removedFromBucketList); /* console returns: entfernt wurde: Kuba */

const removedFromLuckyNumbers = luckyNumbers.pop();
console.log("entfernt wurde : " + removedFromLuckyNumbers); /* console returns: entfernt wurde: 29  (as a string) */
console.log(removedFromLuckyNumbers); /* console returns: 29 (as a number) */

const removedFromFavoritePeople = favoritePeople.pop();
console.log(favoritePeople); /* console returns: (3) ['Lamia', 'Moritz', 'und alle anderen'] */

console.log("entfernt wurde: " + removedFromFavoritePeople); /* console returns: entfernt wurde: natürlich inklusive Trainer */

favoritePeople.push("natürlich inklusive Trainer");
console.log(favoritePeople); /* adding again */






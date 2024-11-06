//- Lernziel: Verwendung der Library [date-fns](https://date-fns.org/docs/Getting-Started)
//- Installiere dir mit npm i date-fns die Bibliothek in deinem Projekt

import { format, differenceInYears, differenceInHours, differenceInSeconds } from "date-fns";

//Lege zwei Datumsvariablen an: 01.01.1970 und jetzt

const startingDate1970 = new Date("1970-01-01");
console.log(startingDate1970);

const currentDate = new Date();
console.log(currentDate);

//Nutze die Funktionen differenceInYears, …Hours, …Seconds
//Lass dir jeweils den Unterschied für die beiden Datumswerte auf der Konsole ausgeben

const showDifferenceInYears = differenceInYears(currentDate,startingDate1970);
console.log("years: ",showDifferenceInYears); //console returns: years: 54
 
const showDifferenceInHours = differenceInHours(currentDate, startingDate1970);
console.log("hours: ",showDifferenceInHours); // console returns : hours: 480810

const showDifferenceInSeconds = differenceInSeconds(currentDate, startingDate1970);
console.log("seconds: ",showDifferenceInSeconds); // console returns: seconds: 1730917857

//Lege eine weitere Variable myBirthday an
//Berechne mit date-fns dein aktuelles Alter und dein Alter am 07.04.2007
const myBirthday = new Date("1982.06.22 05:36:00");

const showCurrentAge = differenceInYears(currentDate, myBirthday);
console.log(`Damn! I am ${showCurrentAge} old. Time flies...`);

const ageIn2007 = differenceInYears(new Date("2007-04-07"), myBirthday);
console.log(`Back in 2007, when I was ${ageIn2007}... wow, memories... `);

//Nutze Format um Informationen zu deinem Geburtstag in folgender Weise auszugeben

const birthdayOutput1 = format(myBirthday, "dd.MM.yyyy kk:mm:ss");
const birthdayOutput2= format(myBirthday, "dd.MM.yyyy kk:mm");
const birthdayOutput3 = format(myBirthday, "dd.MM.yyyy");
const birthdayOutput4 = format(myBirthday, "dd.MMMM.yyyy");
const birthdayOutput5 = format(myBirthday, "kk:mm");
const birthdayOutput6 = format(myBirthday, "EEEE");
const birthdayOutput7 = format(myBirthday, "LLLL");
const birthdayOutput8 = format(myBirthday, "dd 'of' MMMM 'in year' yyyy");

console.log(birthdayOutput1); //console returns:  22.06.1982 05:36:00
console.log(birthdayOutput2); //console returns:  22.06.1982 05:36
console.log(birthdayOutput3); //console returns:  22.06.1982
console.log(birthdayOutput4); //console returns:  22.06.1982
console.log(birthdayOutput5); //console returns:  05:36
console.log(birthdayOutput6); //console returns:  05:36
console.log(birthdayOutput7); //console returns:  June
console.log(birthdayOutput8); //console returns:  22 of June in year 1982


console.log("switch");


let weekdayAsNumber: number;

let weekdayAsString: string;

console.log(Number(window.prompt("Please insert a number from 1 to 7"))); /* window pops up, inserted number logs into console as a number now */

/* saving in variable */
weekdayAsNumber = Number(window.prompt("Please insert a number from 1 to 7"));

/* console.log(weekdayAsNumber); */

/* - Schreibe eine switch-case Anweisung für weekdayAsNumber (also für Werte von 1 bis 7)
    - es soll je nach Wert der entsprechende Wochentag in die Variable weekdayAsString geschrieben werden
    1 = ‘Montag’, 2 = ‘Dienstag’ etc.
- Gebe dann weekdayAsString auf der Konsole aus */

switch (weekdayAsNumber) {
    case 1:
      weekdayAsString = "Montag";
      console.log(weekdayAsString);
      break;
    case 2:
      weekdayAsString = "Dienstag";
      console.log(weekdayAsString);
      break;
    case 3:
      weekdayAsString = "Mittwoch";
      console.log(weekdayAsString);
      break;
    case 4:
      weekdayAsString = "Donnerstag";
      console.log(weekdayAsString);
      break;
    case 5:
      weekdayAsString = "Freitag";
      console.log(weekdayAsString);
      break;
    case 6:
      weekdayAsString = "Samstag";
      console.log(weekdayAsString);
      break;
    case 7:
      weekdayAsString = "Sonntag";
      console.log(weekdayAsString);
      break;
    default:
      console.log("Weekday must be between 1 and 7");
  }
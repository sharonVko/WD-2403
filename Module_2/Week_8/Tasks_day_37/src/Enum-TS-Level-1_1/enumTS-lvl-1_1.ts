console.log("practice enums");

//Definiere ein Enum Weekday mit den Wochentagen Monday bis Sunday

enum Weekday {

    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

console.log(Weekday); /* console returns : {0: 'Monday', 1: 'Tuesday', 2: 'Wednesday', 3: 'Thursday', 4: 'Friday', 5: 'Saturday', 6: 'Sunday', Monday: 0, Tuesday: 1, Wednesday: 2, Thursday: 3, Friday: 4, …} */

enum Month {
    January,
    February,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    October,
    November,
    December
}
console.log(Month); /*  console returns: {0: 'January', 1: 'February', 2: 'March', 3: 'April', 4: 'May', 5: 'June', 6: 'July', 7: 'August', 8: 'September', 9: 'October', 10: 'November', 11: 'December', January: 0, February: 1, March: 2, April: 3, May: 4, …}             
[[Prototype]]: Object*/

/* for (let day in Weekday) {
    if ()
    }
} */


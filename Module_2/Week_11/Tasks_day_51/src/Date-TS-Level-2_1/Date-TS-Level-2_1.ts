import { format, getTime } from "date-fns";


//- Stelle das aktuelle Datum in folgenden beiden Formen dar:
//tt-mm-jjjj und tt/mm/jjjj. (Tag, Monat, Jahr).
//- Nutze:   getDate()  ,getMonth() , getFullYear(), getElementById() oder querySelector().

const currentDate = new Date()
const dateMinus = format(currentDate, "dd-MM-yyyy");

const dateSlash = format(currentDate, "dd/MM/yyyy")
 
const showDateMinus = document.createElement('p') as HTMLHeadElement; 
showDateMinus.textContent = dateMinus;
document.body.appendChild(showDateMinus);


const showDateSlash = document.createElement('p') as HTMLHeadElement;
showDateSlash.textContent = dateSlash; 
document.body.appendChild(showDateSlash);

//- Stelle anschließend die aktuelle Uhrzeit auf zwei Arten dar
// lokal  und  UTC
const localTime = document.querySelector('#localTime') as HTMLParagraphElement;
const uTCtime = document.querySelector('#uTCtime') as HTMLParagraphElement;

console.log(localTime, uTCtime);
//- Lasse dir das Ergebnis im HTML-Dokument anzeigen.
//**Bitte halte dich an den Typescript-Standard.**

localTime.innerHTML = `${format(currentDate, 'hh:mm')}`
uTCtime.innerHTML = `${currentDate.getUTCHours()}:${currentDate.getUTCMinutes()}`



//- Stelle anschließend die aktuelle Uhrzeit auf zwei Arten dar
// lokal  und  UTC
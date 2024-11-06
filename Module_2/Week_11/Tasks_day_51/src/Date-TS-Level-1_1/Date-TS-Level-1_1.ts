console.log("test");


const date1 =  new Date("September 2, 2019 09:00:00");
console.log(date1);

const date2 = new Date(0)

const showDate1 = document.createElement('p') as HTMLParagraphElement;
showDate1.textContent = date1.toString();
document.body.appendChild(showDate1);

const showDate2 = document.createElement('p') as HTMLParagraphElement;
showDate2.textContent = date2.toString();
document.body.appendChild(showDate2);


// ------ alternative way with p tags in html------

const date3 = document.querySelector('#date3') as HTMLParagraphElement;
const date4 = document.querySelector('#date4') as HTMLParagraphElement;

console.log(date3,date4);

date3.innerHTML = `${new Date (31556908800)}`
date4.innerHTML = `${new Date (86400000)}`
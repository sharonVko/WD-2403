console.log("horoscope says hi");
import {zodiacsigns} from "./zodiacsigns";

console.log(zodiacsigns);

const monthInput =  document.querySelector('#monthInput') as HTMLInputElement;
const showBtn = document.querySelector('#showBtn') as HTMLInputElement;

console.log(monthInput);
console.log(showBtn);

showBtn?.addEventListener('click', () => {
    console.log("btn works");
    
})


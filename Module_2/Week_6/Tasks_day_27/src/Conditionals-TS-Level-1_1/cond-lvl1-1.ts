console.log("hi");


let ageInput = document.querySelector('#ageInput') as HTMLInputElement;
const checkBtn = document.querySelector('#checkBtn') as HTMLInputElement;
let legalAge = document.querySelector('#legalAge') as HTMLInputElement;

console.log(ageInput);
console.log(checkBtn);


if(checkBtn){
    checkBtn.addEventListener('click', () => {
        console.log("test");   
    })
}   /* just testing the button response here */

function adult(){

    if(Number(ageInput.value) >= 18){
        console.log(true);
        legalAge.textContent= "Volljährig";
        
    }else if (Number(ageInput.value) <= 18){
        console.log(false);
        legalAge.textContent= "Minderjährig";
        
    }
}

checkBtn.addEventListener('click', adult);
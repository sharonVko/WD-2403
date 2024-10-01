console.log("hi");


const insertNum = document.querySelector('#insertNum') as HTMLInputElement;
const sendBtn = document.querySelector('#sendBtn') as HTMLInputElement;
const result = document.querySelector('#result')as HTMLElement;
console.log(result);

   
function weather(){

     if (Number(insertNum.value) >= 8 && Number(insertNum.value) <=10){
        console.log("Die Wetterqualität ist: super");
        result.textContent="Die Wetterqualität ist: super"
        
    }else if (Number(insertNum.value) >= 6){
        console.log("Die Wetterqualität ist: gut");
        result.textContent="Die Wetterqualität ist: gut";
        
    }else if (Number(insertNum.value) <=5){
        console.log("Die Wetterqualität ist: okay");
         result.textContent="Die Wetterqualität ist: okay";
    }
    else if (Number(insertNum.value) <=2){
        console.log("Die Wetterqualität ist: schlecht");
        result.textContent="Die Wetterqualität ist: schlecht";
    }
}

sendBtn.addEventListener('click', weather);





/* ******  ALTERNATIVE RECAP VERSION  BELOW ******* */

/* insertNum, sendBtn, result --> id's in html matching with variable names  */

/* const insertNum = document.querySelector('#insertNum') as HTMLInputElement;  


const sendBtn = document.querySelector('#sendBtn') as HTMLInputElement;

const result = document.querySelector('#result') as HTMLElement;
console.log(result); */


/* console.log(insertNum);
console.log(5);

console.log(sendBtn); */
// Event als Erstes testen mit console.log und im Browser draufklicken. ()=> ist die Callbackfunktion/1. Wert = Aktion
// Number: string (z.B. 5) muss in number umgewandelt werden!

/* if(sendBtn){
    sendBtn.addEventListener('click', ()=> {
        console.log("test");
        console.log(insertNum.value);
        if(Number(insertNum.value) <= 2){
                console.log("Das Wetter ist schlecht");
                result.textContent="Wetter ist schlecht"
        }
        else if(Number(insertNum.value) <=5 ){
                console.log("Das Wetter ist ok");
                result.textContent="Das Wetter ist ok";      
        }
        else if(Number(insertNum.value) <= 7){
            console.log("Das Wetter ist gut");
            result.textContent="Das Wetter ist gut";
        }
        else if(Number(insertNum.value) <= 10){
            console.log("Das Wetter ist ein Traum. Raus mit dir!");
            result.textContent="Das Wetter ist ein Traum. Raus mit dir!";
        }
    })
} */
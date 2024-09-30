
/* let minNum:number = 1;
let maxNum:number = 78;  */

/* let randomNum:number = Math.floor(Math.random()) * (maxNum - minNum) + minNum; */
let randomNum:number = Math.floor(Math.random()* 78) ;

console.log(randomNum); /* console returns random number */

/* 2 variables with random numbers? might try that tomorrow... */

    


function matchingNumbers (num1:number, num2:number){
    if(num1 === num2){
        console.log("Was für ein Zufall!");
    }else if(num1>num2){
        console.log("Schade.Die erste Zahl ist leider größer!");
        
    }else{
        console.log("Schade.Die zweite Zahl ist leider größer!");
        
    }
}

matchingNumbers(3, 68); /* console terurns: Schade.Die zweite Zahl ist leider größer! */
matchingNumbers(3,3); /* console returns: Was für ein Zufall!  */
matchingNumbers(9, 2); /* console returns: Schade.Die erste Zahl ist leider größer! */

let num1: number = 10;
let num2: number = 2;

function multiplyAndDevide (num1:number, num2:number){
    console.log(`Multiplikation von 10 und 2: ${num1 * num2}`);
    console.log(`Division von 10 und 2: ${num1 / num2}`); /* Division von 10 und 2: 5 */
    
}

multiplyAndDevide(num1,num2); /* console returns: Multiplikation von 10 und 2: 20  */

/* change values to 30 and 20 -> first console log =  600, second console log = 1.5 */
/* change values to 100 and 100 -> first console log = 10000, second console log = 1*/
/* change values to 5 and 0 -> first console log = 0, second console log = infinity */
/* change values to 45 and 173 -> first console log = 7785, second console log =  0.26011560693641617 */
/* change values to 1 and 1000 -> first console log = 1000, second console log =  0.001 */

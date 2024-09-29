/* ************** STRING METHOD replace() ******* */


const samsStatus:string = "Sam is good at codingschool"

console.log(samsStatus.replace("good" , "bad")); /* console returns new text : sam is bad at codingschool ("old value" , ("new value")) */

const susisStatus:string = samsStatus.replace("Sam" , "Susi");

console.log(susisStatus); /* console returns: Susi is good at school */
 
const samsSport:string = samsStatus.replace("codingschool", "tennis");

console.log(samsSport); /* console returns : Sam is good at tennis */

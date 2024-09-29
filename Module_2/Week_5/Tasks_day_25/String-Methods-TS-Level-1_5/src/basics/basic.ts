
/* *********** STRING METHOD  substring()   *********** */

const whereIsSusi:string = 'Susi is back from codingschool'

console.log(whereIsSusi.substring(0, 4)); /* console returns: Susi  */
console.log(whereIsSusi.substring(5, 7)); /* console returns: is  */

console.log(whereIsSusi.substring(24));  /* console returns: school (counts til the end)  */ 

 console.log(whereIsSusi.substring( 0 , 7) + " " + whereIsSusi.substring( 24 )) ; /* console returns : Susi is school  */


/* console.log(whereIsSusi.slice(0,7)+" "+ whereIsSusi.slice(24)); */ /* alternative method .slice  returns same result */


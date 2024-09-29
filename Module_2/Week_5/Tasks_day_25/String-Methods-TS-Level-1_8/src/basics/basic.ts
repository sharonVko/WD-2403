
/* ******** STRING METHOD  toUpperCase() */

const whereIsSam:string = "Sam is going to school"

console.log(whereIsSam.toUpperCase()); /* console returns: SAM IS GOING TO SCHOOL */

console.log(whereIsSam.toLowerCase()); /* console returns: sam is going to school */

/* console.log(whereIsSam.substring(0,4)+ whereIsSam.toUpperCase()); */

console.log(whereIsSam.toUpperCase().substring(0, 4)+ whereIsSam.toLowerCase().substring(4, 15)+ whereIsSam.toUpperCase().substring(15)); /* console returns: SAM is going to SCHOOL */

console.log(whereIsSam.toLowerCase().substring(0, 4)+ whereIsSam.toUpperCase().substring(4, 15)+ whereIsSam.toLowerCase().substring(15));  /* console returns: sam IS GOING TO school */


console.log(whereIsSam.replace("Sam is going to school", "Sam Is Going To School") );
/* seems to be the shortest solution ? not sure what's expected here*/
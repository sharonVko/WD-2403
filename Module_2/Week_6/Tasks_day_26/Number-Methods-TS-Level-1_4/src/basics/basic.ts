/* **** NUMBER METHODS ****** */

const x = "999";
const y = Number(x);
console.log(y); /* console returns: 999 */

const a:number  =  15.166698;
console.log(a); /* console returns: 15.166698 */

const b: number = 7.78714;
console.log(b); /* console returns: 7.78714 */

const c: number = Number("12.3");
console.log(Number(c)); /* console returns: 12.3 */

const d: number = Number("3.14random");
console.log(d);  /* console returns: NaN */

const e : number = Number("32px"); /* console returns: NaN */
console.log(e);

const f: number = Number(true);
console.log(f); /* console returns: 1  */  

const g: number = Number(false);
console.log(g); /* console returns: 0 */

const h: number = Number("321");
console.log(h); /* console returns: h */

const i: number = Number("SuperCode");
console.log(i); /* console returns: NaN */





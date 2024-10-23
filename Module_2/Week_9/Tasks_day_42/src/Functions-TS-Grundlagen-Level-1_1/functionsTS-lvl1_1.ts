//difference function & arrow function

// usual function
function intro1(): void {
	console.log('Hello Function')
};
 intro1(); /* console returns: Hello Function */

 //arrow function
 const intro2 = () => {
    console.log("Hello Function 2");
    
 };
 intro2();  /* function is automatically recognized as void.console returns: Hello Function 2 */
 

 
 //Wenn die Arrow-Function nur EIN Statement hat, können die Klammern und das return-Keyword entfernt werden. Dies macht Arrow-Functions in JavaScript besonders kompakt und nützlich:
//const add = (a: number, b: number) => a + b
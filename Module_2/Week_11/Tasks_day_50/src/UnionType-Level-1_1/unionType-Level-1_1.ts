console.log("test");
// // # Union Types
// -> mit Union Types kannst du einen Datentyp erstellen, der aus mehreren unterschiedlichen Typen besteht

//Erstelle einen Union Type namens Result mit den Werten "success", "error" und "pending"

type TResult = "success" | "error"| "pending";

//Definiere eine Variable vom Typ Result und weise ihr einen der Werte zu.
const positiveResult: TResult = "success" ;

//Schreibe eine Funktion handleResult, die einen Parameter vom Typ Result akzeptiert.
//Implementiere handleResult so, dass sie je nach übergebenem Wert eine entsprechende Meldung ausgibt
const handleResult = (result:TResult) => {
    console.log(`Your result is: ${result}`);
    
};

handleResult(positiveResult); // console returns: Your result is: success

//Teste die Funktion, indem du verschiedene Werte an sie übergibst.
const failResult : TResult = "error";
handleResult(failResult); // console returns: Your result is: error

const waitResult : TResult = "pending";
handleResult(waitResult) // // console returns: Your result is: pending
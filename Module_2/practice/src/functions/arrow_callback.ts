
/* beispiele */

const add = (a: number, b: number): number => {
    return a + b;
};

/* alternative short : const add = (a: number, b: number): number => {
    return a + b;
};
 */

/* Callback Functions (Rückruffunktionen)
Callback Functions sind Funktionen, die als Argumente an andere Funktionen übergeben werden. Sie werden oft verwendet, um asynchrone Operationen zu handhaben. */

function greet(name: string, callback: (message: string) => void) {
    const message = `Hello, ${name}!`;
    callback(message);
}

function logMessage(message: string) {
    console.log(message);
}

greet("Alice", logMessage);


/* function greet(name: string, callback: (message: string) => void): Die Funktion greet nimmt zwei Argumente: name (ein string) und callback (eine Funktion, die einen string als Argument nimmt und nichts zurückgibt).
const message = \Hello, ${name}!`;`: Wir erstellen eine Nachricht mit dem Namen.
callback(message);: Wir rufen die Callback-Funktion mit der Nachricht auf.
function logMessage(message: string): Dies ist die Callback-Funktion, die die Nachricht protokolliert.
greet("Alice", logMessage);: Wir rufen greet auf und übergeben logMessage als Callback. */
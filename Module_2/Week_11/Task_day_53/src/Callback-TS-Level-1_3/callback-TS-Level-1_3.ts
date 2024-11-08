//- Schreibe dort eine Funktion sayHello
//- Parameter 1: name: string
//- Parameter 2: callback: (message: string) ⇒ void

const sayHello = (name:string, callback:(message:string) => void ):void => {
    const message = `Hello, ${name} !`
    callback(message); //calling callback-function with the msg
};
//- Schreibe eine weitere Funktion greetingCallback
//- Parameter: message: string
const greetingCallback = (message:string): void => {
    console.log(message);
    
};

//Rufe sayHello mit verschiedenen Namen und greetingCallback als Callback-Funktion auf
sayHello("Lamia", greetingCallback); //console returns: Hello, Lamia !
sayHello("Necati", greetingCallback);
sayHello("Daniel", greetingCallback);
sayHello("Farid", greetingCallback);
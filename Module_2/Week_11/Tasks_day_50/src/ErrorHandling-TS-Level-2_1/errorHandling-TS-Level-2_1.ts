console.log("test");

//- Schreibe eine Funktion generateLottoNumber, die eine Lottozahl generiert.
const generateLottoNumber = () => {
    //generiere dort eine Zufallszahl zwischen 1 und 100 mit Math.random().
    const lottoNumber: number = Math.round(Math.random() * 100) +1;
    //Wenn die random erstellte Zahl größer als 49 ist, soll ein Fehler ausgelöst werden.
    if(lottoNumber > 49){
        throw new Error("number is bigger than 49")
    } else {
        /* console.log(`Your number is ${lottoNumber}`); */
        //Ansonsten wird die Zahl als Rückgabewert zurückgegeben
        return lottoNumber;
    }
};

//Verwende einen try-catch-Block, um Fehler abzufangen und zu behandeln.
//Schreib die generierte Lottozahl in ein Array lottoResults: number[], wenn kein Fehler aufgetreten ist.
let lottoNumResults: number[] =  [];

while(lottoNumResults.length < 7) {
try{
    let number = generateLottoNumber();
    if(!lottoNumResults.includes(number)) { //Es dürfen keine doppelten Zahlen in lottoResults aufgenommen werden
        lottoNumResults.push(number); // if not yet existent inside array, push that number
    }
}catch (err) {
    console.log("Sorry, the number was too big");
}  ; 
};


//Lass dir am Ende die Lottozahlenreihe auf der Konsole ausgeben
console.log(`And finally, ...your numbers are: ${lottoNumResults}` ); // console returns: And finally, ...your numbers are: 2,16,45,46,47,21,19

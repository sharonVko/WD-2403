console.log("promises");

import WeatherType from "./WeatherType";

//- Erstelle ein Promise vom Typ WeatherType


const weatherForecast:Promise<WeatherType> = new Promise((resolve, reject) => {   //- Lass dir mit Math.random einen zufälligen Wert zwischen 0 und 9 generieren
    const randomNumber:number = Math.floor(Math.random () * 9)
    //console.log(randomNumber);
    if(randomNumber <= 6) {
        resolve(randomNumber) //Ist der Wert zwischen 0 und 6, gib mit resolve den zugeordneten Enum-Wert zurück
    } else {
        reject("Weather forecast could not be determined")
    }
});
//console.log(weatherForecast);


weatherForecast.then((response: WeatherType) => {
    /* console.log(response);
     */
    console.log(WeatherType[response]); //picking the index & matching text!  for e.g. : snowy
    
}).catch((error) => {
    console.error(error);
});
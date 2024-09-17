function weather(){ /* sitzt auf dem button */
    const weatherQuality = parseInt(document.querySelector("#degrees").value);

    const result = document.querySelector("p"); /* p im html */

    if (weatherQuality >= 8){
        result.innerText = "Wetter ist super" /* Qualität zwischen 8 und 10 */
   
    }else if (weatherQuality >=6){
        result.innerText = "Wetter ist gut" /* zwischen 6 und 7  */
    
    }else if (weatherQuality >=3){
        result.innerText = "Wetter ist okay" /* zwischen 3 und 5  */

    }else if (weatherQuality >=0){
        result.innerText = "Wetter ist schlecht" /*  zwischen 0 und 2  */
    }
}

/* *********** Conditionals-TS-Level-2_3 *********** */


function doubleDifference(digit:number){
        if(digit > 27){
            console.log((digit - 27)*2);
            
        }else {
            console.log("Für ein spannendes Ergebnis, gebe bitte eine beliebige Zahl höher als 27 ein");
            
        }
}
doubleDifference(20); /* console returns: Für ein spannendes Ergebnis, gebe bitte eine beliebige Zahl, höher als 27 ein */
doubleDifference(35); /* console returns: 16 */
doubleDifference(74); /* console returns: 94  */
doubleDifference(123); /* console returns: 192 */
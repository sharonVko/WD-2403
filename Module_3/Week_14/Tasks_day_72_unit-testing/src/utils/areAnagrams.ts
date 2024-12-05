// * Unit-Testing-Level_1_1

export function areAnagrams(string1: string, string2: string) {
    const normalize = (str:string) => str.toLowerCase().replace(/\s/g, '').split('').sort().join('');
    return normalize(string1) === normalize(string2);
  }


  // - Die Funktion areAnagrams soll ausführlich mit Hilfe von Unit Tests getestet werden
    
 // - Sie ermittelt, ob die beiden übergebenen Strings [Anagramme](https://de.wikipedia.org/wiki/Anagramm) voneinander sind.
 // - Schreibe so viele Unit Tests wie nötig, damit alle Testfälle abgedeckt sind
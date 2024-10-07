console.log("practice sort");

/* - Sortiere die Programmiersprachen alphabetisch.
- Der Code für das Array steht im Code-Snippet.
- Deklariere die Funktion sortAlphabetically.
- Verwende den Befehl sort(), um die Aufgabe zu erfüllen.
- Rufe die Funktion sortAlphabetically auf.
- Überprüfe den Erfolg in der Konsole. */

let languages: string[] = [
    "JavaScript",
    "Python",
    "Java",
    "Ruby",
    "PHP",
    "C++",
    "CSS",
    "C#",
    "Go",
    "C",
    "TypeScript",
    "Swift"
];


/* console.log(languages.sort()); */ /* console repeats: (12) ['C', 'C#', 'C++', 'CSS', 'Go', 'Java', 'JavaScript', 'PHP', 'Python', 'Ruby', 'Swift', 'TypeScript'] */

/* actually returns it alphabetically by default */

const europeanCountries: string[] = ["France", "Germany", "Sweden", "Great Britain", "Czech Republic", "Switzerland"];
console.log(europeanCountries); /* console returns:(6) ['France', 'Germany', ' Sweden', 'Great Britain', 'Czech Republic', 'Switzerland'] */
function sortAlphabetically() {
    console.log(languages.sort());
    
    console.log(europeanCountries.sort());
    
}



/* sortAlphabetically(); */ /* console returns: (12) ['C', 'C#', 'C++', 'CSS', 'Go', 'Java', 'JavaScript', 'PHP', 'Python', 'Ruby', 'Swift', 'TypeScript'] */



sortAlphabetically(); /* console returns: (6) ['Czech Republic', 'France', 'Germany', 'Great Britain', 'Sweden', 'Switzerland'] */  


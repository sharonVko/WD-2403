console.log("practice sort and reverse");

let codingLanguages: string[] = [
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

console.log(codingLanguages.sort());   /* console returns: (12) ['C', 'C#', 'C++', 'CSS', 'Go', 'Java', 'JavaScript', 'PHP', 'Python', 'Ruby', 'Swift', 'TypeScript']0: "C"1: "C#"2: "C++"3: "CSS"4: "Go"5: "Java"6: "JavaScript"7: "PHP"8: "Python"9: "Ruby"10: "Swift"11: "TypeScript"length: 12[[Prototype]]: Array(0) */

const europeanCountries: string[] = ["France", "Germany", "Sweden", "Great Britain", "Czech Republic", "Switzerland"];
console.log(europeanCountries.sort()); /* console returns:(6) ['Czech Republic', 'France', 'Germany', 'Great Britain', 'Sweden', 'Switzerland']  */

function sortDescending(){
    console.log(codingLanguages.sort().reverse());
    console.log(europeanCountries.sort().reverse());
    
};

sortDescending();

/* console returns: (12) ['TypeScript', 'Swift', 'Ruby', 'Python', 'PHP', 'JavaScript', 'Java', 'Go', 'CSS', 'C++', 'C#', 'C'] */
/* console returns: (6) ['Switzerland', 'Sweden', 'Great Britain', 'Germany', 'France', 'Czech Republic'] */

/* Die Methode slice() kennst du schon von den Strings. Auch hier kann man mit slice() Werte aus einem Array schneiden und bekommt ein neues Array zurück. Hierbei ist zu beachten, dass slice() einen Startindex benötigt, optional auch einen Endindex. */
const lieblingsreiseziele: string [] = ["Tel Aviv", "Dortmund", "Bochum","Wien","New York", "Olbia"];
console.log(lieblingsreiseziele); /* console returns: (6) ['Tel Aviv', 'Dortmund', 'Bochum', 'Wien', 'New York', 'Olbia'] */

lieblingsreiseziele.slice(1,3); /* console STILL returns: (6) ['Tel Aviv', 'Dortmund', 'Bochum', 'Wien', 'New York', 'Olbia'] */
console.log(lieblingsreiseziele.slice(1,3)); /* console returns: 
(2) ['Dortmund', 'Bochum'] */

/* Lass dir dein Array "lieblingsreiseziele" einmal vor dem slicen in der Konsole ausgeben und einmal danach. Dir wird auffallen, dass das ursprüngliche Array nicht verändert worden ist. Das bedeutet, dass slice() eine Kopie von den Werten erstellt und nicht das ursprüngliche Array beeinflusst. */





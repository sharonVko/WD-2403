console.log("practice enums, loop");
//Du sollst eine Farbauswahl mit Hilfe von Buttons in einem Online-Shop erstellen

//- Definiere ein Enum ClothingColor mit dem Farbnamen und der Entsprechung in Hex-Werten
//- Es gibt diese Farben: Gelb, Orange, Pink, Blau, Lila, und Grau

enum ClothingColor {

    Gelb = "#FFFF00",
    Orange = "#FFA500",
    Pink = "#FFC0CB",
    Blau = "#0000FF", 
    Lila = "A020F0", 
    Grau = "#BEBEBE"
};
console.log(ClothingColor); /* console returns: {Gelb: '#FFFF00', Orange: '#FFA500', Pink: '#FFC0CB', Blau: '#0000FF', Lila: 'A020F0', …}Blau: "#0000FF"Gelb: "#FFFF00"Grau: "#BEBEBE"Lila: "A020F0"Orange: "#FFA500"Pink: "#FFC0CB"[[Prototype]]: Object */

//Lege dir ein Array mit allen Farben an: allColors: Color[]
const allColors: ClothingColor [] = [
    ClothingColor.Blau,
    ClothingColor.Gelb,
    ClothingColor.Grau,
    ClothingColor.Lila,
    ClothingColor.Orange,
    ClothingColor.Pink
];
console.log(allColors); /*  console returns: (6) ['#0000FF', '#FFFF00', '#BEBEBE', 'A020F0', '#FFA500', '#FFC0CB'] */

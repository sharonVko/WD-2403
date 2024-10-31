
import Circle from "./classes/Circle";
import Rectangle from "./classes/Rectangle";

//Lege drei Instanzen von Circle an, der name ist immer ‘circle’

const yellowCircle = new Circle("Yellow Circle","yellow", 4);
const purpleCircle = new Circle("Purple Circle", "purple",6);
const orangeCircle = new Circle("Orange Circle", "orange", 10);

console.log(yellowCircle,purpleCircle,orangeCircle);

yellowCircle.draw();
purpleCircle.draw();
orangeCircle.draw();

//console returns each circle: Drawing circle


/* yellowCircle.draw() */

const blackRectangle = new Rectangle (" Black Rectangle", "black", 10,14);
const redRectangle = new Rectangle ("Red Rectangle", "red", 16,20);
blackRectangle.draw(); // console returns: Drawing Rectangle
redRectangle.draw(); //    ""
console.log("superballs");

//Erstelle vier SuperBalls: Durch das Anklicken eines SuperBalls ändert sich die Hintergrundfarbe des <body> und die Textfarbe der Überschrift <h1>.
// Nutze CSS um die Elemente zu stylen. Entweder nutzt du linear-gradient oder du sprichst jeden Halbkreis selber an.
// In deinem TS-Code definierst du dann was beim Klick auf den jeweiligen SuperBall passieren soll.


// ball 1 onclick bg green, text purple
//ball 2 onclick bg lavender, text yellow 
// etc

const headline = document.querySelector('#headline') as HTMLHeadElement;
const circleOne = document.querySelector('#circleOne') as HTMLButtonElement;
const circleTwo = document.querySelector('#circleTwo') as HTMLButtonElement;
const circleThree = document.querySelector('#circleThree') as HTMLButtonElement;
const circleFour = document.querySelector('#circleFour') as HTMLButtonElement;

console.log(circleOne, circleTwo, circleThree, circleFour);

circleOne?.addEventListener('click', () => {
    /* console.log('one'); */
    document.body.style.backgroundColor = "green", /* setting bg color of body to green, on button click */
    headline.style.color = "purple" /* and setting headline text color on purple */
});

circleTwo?.addEventListener('click', () => {
   /*  console.log('two'); */
    document.body.style.backgroundColor = "rgb(93,71,139)",
    headline.style.color = "rgb(201, 201, 114)"
});

circleThree?.addEventListener('click', () => {
    /* console.log('three'); */
    document.body.style.backgroundColor = "black",
    headline.style.color = "rgb(227, 149, 4)";

});

circleFour?.addEventListener('click', () => {
    /* console.log('four'); */
     document.body.style.backgroundColor = "navy";
     headline.style.color = "skyblue";   
});
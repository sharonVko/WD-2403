console.log("practice DOM, math methods");

const button = document.querySelector('button') as HTMLButtonElement;

//setting variables for RGB color values
let blue = 0;
let green = 0;
let red = 0;

button?.addEventListener('click', () => {
    /* console.log('test'); */
    //generating random values for color variables
    blue = Math.floor(Math.random() * 255);
    green = Math.floor(Math.random() * 255);
    red = Math.floor(Math.random() *255);

    document.body.style.backgroundColor = `rgb(${blue}, ${green}, ${red})`; /* this is setting the bg color of the body to the randomly chosen color */
})
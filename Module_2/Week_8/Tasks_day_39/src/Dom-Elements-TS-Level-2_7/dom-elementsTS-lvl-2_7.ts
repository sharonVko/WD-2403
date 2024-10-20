console.log("practice DOM , create element");


const button = document.getElementsByTagName('button') as HTMLCollection;

console.log(button[0]);

const umwickeln = document.querySelector('.umwickeln') as HTMLElement;
console.log(umwickeln);

let counter:number = 0; /* initialize counter starting from 0 */

button[0]?.addEventListener('click', () => {
    console.log('button works');
    
    const createAscElement = document.createElement('div'); /* create the new element */

    if(counter === 0) {       /* if counter is 0, create the first element with class 'weiss' from html with text'0' */
        createAscElement.classList.add('weiss');
        createAscElement.textContent = `0`;
    } else { /* every other click  creates the following, counting/showing ascending numbers  */
        createAscElement.classList.add('rechteck');
        createAscElement.textContent = `${counter}`;
    }

    umwickeln.appendChild(createAscElement); /* the created element is added to the wrapping div-element in html */

    counter++; /* counter is incremented, so the next element is numbered accordingly */

    
   /*  createAscElement.classList.add('rechteck');
    if( counter === 0){
        createAscElement.classList.add('weiss')
    }
    createAscElement.textContent = `${++counter}`;
    umwickeln.appendChild(createAscElement); */ // didn't count as shown in the video
});


// circle of first element deforms on second button click
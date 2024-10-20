console.log('practice  DOM ,classlist');

const everyBtn = document.querySelectorAll('button') as NodeListOf< HTMLButtonElement>;

const element = document.querySelector('#element') as HTMLDivElement;

console.log(everyBtn, element);

/* function for clicking small button */
everyBtn[0]?.addEventListener('click', () => {
    console.log('small test');
    element.classList.remove('middle', 'bigAndCrazy');/* removing the other css classes with their different styling  */
    element.classList.add('small');/* adding the matching styling with the css class .small */
});

/* function for middle button */
everyBtn[1]?.addEventListener('click', () => {
    console.log('middle test');
    element.classList.remove('small', 'bigAndCrazy');
    element.classList.add('middle'); /* adding the matching styling with the css class .middle */
    
});


/* function for big & crazy button */
everyBtn[2]?.addEventListener('click', () => {
    console.log('big test');
    element.classList.remove('small', 'middle');
    element.classList.add('bigAndCrazy'); /* adding the matching styling with the css class .bigAndCrazy */
    
});
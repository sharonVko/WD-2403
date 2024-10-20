console.log("practice DOM");

const vorname = document.querySelector('#vorname') as HTMLImageElement;
const nachname = document.querySelector('#nachname') as HTMLInputElement;
const  land = document.querySelector('#land') as HTMLSelectElement; 

const submitBtn = document.querySelector('#submitBtn') as HTMLInputElement;

submitBtn?.addEventListener('click', (event) => {
    event.preventDefault(); 
    console.log("test");
    
});
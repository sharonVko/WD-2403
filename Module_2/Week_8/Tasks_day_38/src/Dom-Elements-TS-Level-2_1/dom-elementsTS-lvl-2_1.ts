console.log("practice DOM");

const navChange = document.getElementById('navChange') as HTMLAnchorElement;
console.log(navChange);

const navHome = document.getElementById('navHome') as HTMLAnchorElement;
console.log(navHome);

let clickChange = true; /* original condition of navHome colors */

navChange?.addEventListener('click', () => {
    /* console.log("working"); */
    if(navHome) { 
        if(clickChange) {
            navHome.textContent = 'Home';   /* original color condition */
            navHome.style.backgroundColor = "";
            navHome.style.color = "";
        } else {
            navHome.textContent =  'emoH'; /* changed after 1st click */
            navHome.style.backgroundColor = 'pink';
            navHome.style.color = 'white';
        }
        clickChange = !clickChange; /* toggle condition  */
    }
});
//Lernziel: fetch zum Abrufen von Daten von einer API nutzen

//- Nutze den Endpunkt /list der [Picsum API](https://picsum.photos/v2/list) und lass dir die Liste der Bilder in der Console ausgeben.
//    - Fange mögliche Fehler beim Aufruf der API ab und zeige sie in der Konsole an


const BASE_URL = 'https://picsum.photos/v2/list' 

async function fetchPictures() {
    try{
        const response = await fetch(BASE_URL);
        
        const result = await response.json();
        console.log(result);

    }catch (error){
        console.error('fetching data failed',error)
    }
    
}

fetchPictures()  // console returns: (30) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}] ... array list of all data/objects

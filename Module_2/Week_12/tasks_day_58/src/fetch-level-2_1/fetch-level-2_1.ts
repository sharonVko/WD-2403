
//Lernziel: fetch zum Abrufen von Daten von einer API nutzen

//- Nutze wieder die [Picsum API](https://picsum.photos/v2/list)
 //   - Da du dir die Daten jetzt schon in der Konsole ausgeben lassen kannst, darfst du als nächstes für jeden Datensatz eine Kombination aus Bild und Autor:in in ein figure-Element wrappen und in deinem HTML ausgeben lassen
// - Die Elemente in deinem HTML sollten dann so aussehen:
//<figure>
//	<img src="https://picsum.photos/id/0/5616/3744">
//	<figcaption>Alejandro Escamilla</figcation>
//</figure>

// based on fetch function of level 1_1 (added interface and line 25 & 26 in fetch function):
import { IPhoto } from "./IPhoto";

const imgSection = document.getElementById('img-section') as HTMLElement;

const BASE_URL = 'https://picsum.photos/v2/list' 

async function fetchPictures() {
    try{
        const response = await fetch(BASE_URL);
        
        const result = await response.json() as IPhoto[];
        console.log(result);
       photos = result,
      displayAllPhotos(photos);
    }catch (error){
        console.error('fetching data failed',error);
    }
    
}

fetchPictures()

let photos :IPhoto[] = [];

//create in html - calling this function in line 26

const displayAllPhotos = (photos : IPhoto[]) => {
    console.log(photos);
    photos.forEach((photo:IPhoto) => {
        const createFigure = document.createElement("figure") as HTMLElement;
        
        createFigure.innerHTML= `
        <img src="${photo.download_url}" alt="image"/>
        <figcaption>${photo.author}</figcaption>`

        imgSection.append(createFigure);
    })
}
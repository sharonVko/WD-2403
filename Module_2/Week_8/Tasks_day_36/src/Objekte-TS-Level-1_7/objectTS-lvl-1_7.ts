console.log("practice object and forEach()");


type Music = {
    artist: string;
    title: string;
    release_year: number;
    medium: string[];
    gold: boolean;
  };
  
  let myTopFour: Music[] = [
    {
      artist: 'The Beatles',
      title: 'Abbey Road',
      release_year: 1969,
      medium: ['LP', 'CD', 'MC', 'Download'],
      gold: true
    },
    {
      artist: 'Pink Floyd',
      title: 'Dark Side of the Moon',
      release_year: 1978,
      medium: ['CS', 'CD', 'LP', 'Download'],
      gold: true
    },
    {
      artist: 'Led Zeppelin',
      title: 'Led Zeppelin IV',
      release_year: 1971,
      medium: ['CS', 'LP', 'Download'],
      gold: true
    },
    {
      artist: 'Metallica',
      title: 'Kill ’Em All und Ride the Lightning',
      release_year: 1983,
      medium: ['LP', 'CD', 'MC', 'Download'],
      gold: true
    }
  ];
  console.log(myTopFour);
  

 const outputCharts = document.querySelector('#outputCharts') as HTMLElement;

  
  const chartsCards = (arr: any) => {
    outputCharts.innerHTML = "";
    
    arr.forEach((elt: any) => { /* id for css styling */
        outputCharts.innerHTML += `
        <div id="chartcard"> 
        <p>${elt.artist}</p>
        <p>${elt.title}</p>
        <p>${elt.medium}</p>
         </div>`
       
    });
}

chartsCards(myTopFour);
  
  
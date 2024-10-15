console.log("practice objects");

type Musik = {
    kunstler: string;
    title: string;
    release_jahr: number;
    formate: string[];
    gold: boolean;
  };
  
  let meineTopVier: Musik[] = [
    {
      kunstler: 'The Beatles',
      title: 'Abbey Road',
      release_jahr: 1969,
      formate: ['LP', 'CD', 'MC', 'Download'],
      gold: true
    },
    {
      kunstler: 'Pink Floyd',
      title: 'Dark Side of the Moon',
      release_jahr: 1978,
      formate: ['CS', 'CD', 'LP', 'Download'],
      gold: true
    },
    {
      kunstler: 'Led Zeppelin',
      title: 'Led Zeppelin IV',
      release_jahr: 1971,
      formate: ['CS', 'LP', 'Download'],
      gold: true
    },
    {
      kunstler: 'Metallica',
      title: 'Kill ’Em All und Ride the Lightning',
      release_jahr: 1983,
      formate: ['LP', 'CD', 'MC', 'Download'],
      gold: true
    },
    {
        kunstler: 'Depeche Mode',
        title: 'Playing the Angel',
        release_jahr: 2005,
        formate: ['LP', 'CD','Download'],
        gold: true
      },
      {
        kunstler: 'Beastie Boys',
        title: 'Hello Nasty',
        release_jahr: 1998,
        formate: ['LP', 'CD','Download'],
        gold: true
      }
  ];

  console.log(meineTopVier);

  console.log(meineTopVier[0].kunstler); /* console returns: The Beatles */
  console.log(meineTopVier[1].formate[3]); /* console returns: Download */
  console.log(meineTopVier[1].gold);  /* console returns: true*/
  console.log(meineTopVier[2].release_jahr, meineTopVier[3].release_jahr);  /* console returns: 1971 1983 */
  console.log(meineTopVier[3].formate[2]);  /* console returns: MC */
  console.log(meineTopVier[3].title.substring(16,22));  /* console returns: Ride */
  console.log(meineTopVier[4]);  /* console returns: {kunstler: 'Depeche Mode', title: 'Playing the Angel', release_jahr: 2005, formate: Array(3), gold: true}*/
  console.log(meineTopVier[4].kunstler);  /* console returns: Depeche Mode */
  console.log(meineTopVier[5].title, meineTopVier[5].release_jahr);  /* console returns: Hello Nasty 1998 */
  
  
  

  
  
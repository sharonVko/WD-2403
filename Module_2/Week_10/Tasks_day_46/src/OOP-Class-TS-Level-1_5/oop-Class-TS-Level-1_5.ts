//Erstelle eine Datei Song.ts --> see Song.ts
import Song from "./Song";
import SongWithUnknownArtist from "./SongWithUnknownArtist";

//- Lege dort 2 Instanzen der Klasse Song an
//- Setze jeweils eine durationInSeconds
const song1 = new Song("Nothing else matters","Metallica");
song1._durationInSeconds = 388;
console.log(song1); // console returns: Song {_title: 'Nothing else matters', _artist: 'Metallica', _durationInSeconds: 388}

const song2 = new Song("Song2","Blur");
song2._durationInSeconds = 122; 
console.log(song2);

const song3 = new Song("Mobb Deep", "Survival of the fittest");
console.log(song3);//console returns: Song {_title: 'Mobb Deep', _artist: 'Survival of the fittest', _durationInSeconds: 0}

//- Lege in der Datei app.ts eine Instanz der Klasse SongWithUnknownArtist an
//- Setze nachträglich über die entsprechende Methode einen Wert für artist

const song4 = new SongWithUnknownArtist("Unchained melody");
song4.setArtist('The Righteous Brothers');
song4._durationInSeconds = 216;
console.log(song4); // console returns: SongWithUnknownArtist {_title: 'Unchained melody', _artist: 'The Righteous Brothers', _durationInSeconds: 216}

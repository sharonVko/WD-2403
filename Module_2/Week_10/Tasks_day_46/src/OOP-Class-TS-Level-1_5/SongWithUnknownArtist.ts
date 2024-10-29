//Erstelle eine Klasse SongWithUnknownArtist
//Diese Klasse soll von der Klasse Song ableiten
import Song from "./Song";

class SongWithUnknownArtist extends Song {
   

    constructor(title:string){
        super(title, 'Unknown')
    };

//Schreibe eine Methode setArtist() mit einem Parameter name vom Datentyp string    
//In der Methode soll die Eigenschaft artist gesetzt werden
    setArtist(name:string){
        this._artist = name;
    };
};

export default SongWithUnknownArtist;
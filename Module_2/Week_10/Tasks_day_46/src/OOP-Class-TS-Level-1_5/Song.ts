//- Deklariere eine Klasse Song
//- Lege drei Eigenschaften an:
//- private title (string)
//- protected artist (string)
//- public durationInSeconds (number)
//- Die Eigenschaften title und artist sollen über einen Konstruktorparameter beim Anlegen gesetzt werden
//
class Song {
  private _title: string;
  protected _artist: string;
  public _durationInSeconds: number;

  get title():string{
    return this._title
  };

  constructor (title:string, artist:string, ){ /* durationInSeconds:number */
     this._title = title;
     this._artist = artist;
     this._durationInSeconds =  0;
  };

  
};


export default Song
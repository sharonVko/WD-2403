import Actor from "./Actor";


class Episode {
     _title: string;
     _length: string;
     _description: string;
     _actors: Actor[];


     constructor(title:string, length:string, description:string,actors:Actor[]) {
        this._title = title;
        this._length = length;
        this._description = description;
        this._actors = actors
     };

     addActor(newActor: Actor): void {
        this._actors.push(newActor);
      }
}





export default Episode;
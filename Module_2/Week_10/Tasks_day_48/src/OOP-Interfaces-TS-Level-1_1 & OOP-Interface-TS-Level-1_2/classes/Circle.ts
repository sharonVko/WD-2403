import IShape from "../contracts/IShape";
//- Lege eine Klasse Circle an, die IShape implementiert
//- Die Klasse soll die zusätzliche Eigenschaft haben
//- radius: number



class Circle implements IShape {
    _name: string;
    _color: string;
    _radius: number;

    _isRound: boolean = true; /* level 1_2 */ 

    constructor(name:string,color:string,radius:number){
        this._name = name;
        this._color = color;
        this._radius = radius;
    }
;

    //Außerdem gibt es die public Methode draw, die auf der Konsole “Drawing circle” ausgibt
    public draw():void {
        console.log("Drawing circle");
        
    };
};

export default Circle;
// Beginning of  OOP-Interface-TS-Level-1_2 based on level 1_1  !

//- Erstelle eine weitere Datei im Hauptordner rectangle.ts
//- Erstelle dort eine Klasse Rectangle, die das Interface IShape implementiert
//- Die Klasse soll diese zusätzlichen Eigenschaften haben
//    - width: number
//    - height: number
//- Außerdem gibt es eine Methode draw, die auf der Konsole “drawing rectangle” ausgibt
import IShape from "../contracts/IShape";

class Rectangle implements IShape {
    _name: string;
    _color: string;
    _width : number;
    _height: number;

    _isRound: boolean = true; /* level 1_2 */

    constructor(name:string, color:string, width: number, height:number) {
        this._name = name;
        this._color = color;
        this._width = width;
        this._height = height;
    }

    //- Außerdem gibt es eine Methode draw, die auf der Konsole “drawing rectangle” ausgibt (not adding a second metod in IShape ,using the same method name, just changing console log text)
    public draw():void {
        console.log("Drawing Rectangle");
        
    };

};

export default Rectangle;
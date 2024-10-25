/* import Driver from "./Driver"; */
import CarType from "./CarType";
// auf Basis von Aufgabe OOP class level 2_2 -->
//- in der Klasse Car
//- soll constructionYear nur über den Konstruktor gesetzt werden können

class Car {
    _brand: string;
    private _constructionYear: number;
    _currentSpeed: number;
    _carType : CarType; //erweitere die Klasse Car um eine neue Eigenschaft carType: CarType


    constructor (marke: string, baujahr: number, currentSpeed:number, carType: CarType) {
        this._brand = marke;
        this._constructionYear = baujahr;
        this._currentSpeed = currentSpeed;
        this._carType = carType;
    }
//→ Wert ist nur über einen Getter (get-Methode) abrufbar
    get constructionYear () {
        return this._constructionYear
    };

 //- soll es eine Methode getSpeedInfo(): string geben mit dieser Logik geben
 //- currentSpeed ≤ 40 → Rückgabewert ‘Driving slowly’   .....

    getSpeedInfo():string {
        /* let speed = this._currentSpeed */
        if (this._currentSpeed <= 40){
            return "Driving fast"
        }else if (this._currentSpeed >=70 && this._currentSpeed <= 120) {
            return "Driving fast"
        }else if (this._currentSpeed >120 && this._currentSpeed <= 190) {
            return "Driving really fast"
        }else if (this._currentSpeed > 190){
            return "WTF"
        }else {
            return("you might wanna start your vehicle first");
            
        };
    };
    

    //soll es eine Methode getCarType(): CarType geben, die den CarType des aktuellen Autos als Text ausgibt

    // get method for getCarType 
getCarType(): CarType {
    return this._carType
    
  }; 

};



export default Car;
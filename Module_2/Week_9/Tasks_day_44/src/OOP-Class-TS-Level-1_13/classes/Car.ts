/* import Driver from "./Driver"; */
//- in der Klasse Car
//- soll constructionYear nur über den Konstruktor gesetzt werden können

class Car {
    _brand: string;
    private _constructionYear: number;
    _currentSpeed: number;


    constructor (marke: string, baujahr: number, currentSpeed:number) {
        this._brand = marke;
        this._constructionYear = baujahr;
        this._currentSpeed = currentSpeed
    }
//→ Wert ist nur über einen Getter (get-Methode) abrufbar
    get constructionYear () {
        return this._constructionYear
    };

    getSpeedInfo(){
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
            console.log("you might wanna start your vehicle first");
            
        }
    }
}

export default Car;
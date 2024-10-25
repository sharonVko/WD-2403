class Animal {
    _species: string;
    _age: number;
    _color: string;

    get species(){
        return this._species
    };

    set species(value:string){
        this._species
    };

    get age(){
        return this._age
    };

    set age(value:number){
        this._age
    };

    get color(){
        return this._color
    };
    set color(value: string){
        this._color
    }
    

    constructor(species:string, age:number,color:string ){
        this._species = species;
        this._age = age;
        this._color = color
    }
}


export default Animal;
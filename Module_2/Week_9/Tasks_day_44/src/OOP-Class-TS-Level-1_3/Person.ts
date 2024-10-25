class Person {
    _name : string;
    _birthday: Date;
    _gender: Gender;


    get name (){
        return this._name
    };
    set name (value:string){
         this._name;
    };

    
    get gender ():Gender {
        return this._gender;
    };
    set gender (value:Gender){
        this._gender
    };

    get birthday ():Date {
        return this._birthday
    }

    constructor (name:string, birthday:Date, gender:Gender) {
        this._name = name;
        this._birthday = birthday;
        this._gender = gender
    }

    }


 export const enum Gender {
    Male = "Male",
    Female = "Female",
    Diverse = "Diverse"
};

export default Person;

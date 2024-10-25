
//Definiere eine Klasse Customer
//sie soll die Eigenschaften name (string), email (string), address (string), postalCode (number) und city (string) enthalten

class Customer {
   private _name : string;
   private _email : string;
   private _address: string;
   private _postalCode : string;
   private _city : string;


    constructor(name:string, email:string, address:string, postalCode:string, city:string) {
        this._name = name;
        this._email = email;
        this._address = address;
        this._postalCode = postalCode;
        this._city = city
    };



//Implementiere Get- und Set-Methoden für jede Eigenschaft.

get name ():string {
    return this._name
};

//vor dem Setzen des Namens soll geprüft werden, dass die Länge 60 Zeichen nicht überschreitet. Beim Überschreiten soll eine sinnvolle Fehlermeldung auf der Konsole ausgegeben werden. Der Wert wird dann nicht gesetzt.

set name (value:string) {
    if (value.length <= 60) {
        this._name = value ;
        
    }else {
        console.error("Invalid length for name.");
        
    };
};
//__________________________________________________

get email ():string {
    return this._email
};

//vor dem Setzen der E-Mail-Adresse soll geprüft werden, ob die Adresse ein @-Zeichen und einen Punkt enthält. Ggf. soll eine sinnvolle Fehlermeldung auf der Konsole ausgegeben werden. Der Wert wird dann nicht gesetzt.

set eMail (value:string) {
    if (value.includes("@")) {
        value = this._email ;
    } else {
        console.error("Invalid input.Your e-mail address must include @")
    };
};

//__________________________________________________

get address ():string {
    return this._address
};

set address (value:string) {
    this.address = value;
};
//__________________________________________________

get postalCode ():string {
    return this._postalCode
};

//vor dem Setzen der Postleitzahl (postalCode) soll geprüft werden, ob die Postleitzahl 5-stellig ist und zwischen 00000 und 99999 liegt. Ggf. soll eine sinnvolle Fehlermeldung auf der Konsole ausgegeben werden. Der Wert wird dann nicht gesetzt.
set postalCode (value:string) {
   
    if (value.length === 5 && Number(value) >= 0 && Number(value) <= 99999) {
         this._postalCode = value;
    } else {
        console.error("Invalid input. Your zip code must have 5 digits between 00000 and 99999")
    }
}

/* set postalCode (value:number) {
    const convertToString = value.toString();
    if (convertToString.length === 5 && value >= 0 && value <= 99999) {
         this._postalCode = value;
    } else {
        console.error("Invalid input. Your zip code must have 5 digits between 00000 and 99999")
    }
} */

//__________________________________________________

get city ():string {
    return this._city
};


set city (value:string) {
    this._city = value
};

};



export default Customer;
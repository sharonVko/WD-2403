//__________*** OOP-Class-TS-Level-2_1 *** __________

//Wir wollen unsere Schulklassenverwaltung (SchoolClass) nun weiter ausbauen.
//**a)** Wir möchte die Schulklasse mit Leben füllen und brauchen dafür eine Klasse Person mit folgenden Attributen/Eigenschaften: 

//-id
//- firstName
//- lastName
//- birthday
//Überlege dir hierzu selbst die passenden Datentypen.

class Person {
    _id: number;
    _firstName: string;
    _lastName: string;
    _birthday: string;


constructor (id:number, firstName: string,lastName:string, birthday:string) {
    this._id = id;
    this._firstName = firstName;
    this._lastName = lastName;
    this._birthday = birthday;

}    
}

export default Person;
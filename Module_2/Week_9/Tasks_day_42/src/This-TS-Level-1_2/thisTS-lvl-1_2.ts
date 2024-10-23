
//- Verwende den vorgegebenen Code.
// Baue in der Function zeigeProfil deines Objektes die Ausgabe aller Werte der Person ein
// Validiere dein HTML auf Korrektheit.

let person = {
    vorname: 'Anton',
    nachname: 'Fish',
    alter: 34,
    familienstand: 'ledig',
    groesse: 1.78,
    zeigeProfil: function () {
         return `Name: ${this.vorname}
          <p>Nachname: ${this.nachname}</p>
          <p>Alter: ${this.alter} Jahre</p> 
          <p>Familienstand: ${this.familienstand}</p>
          <p>Grösse: ${this.groesse} cm</p>`
     }
 };

 console.log(person.vorname);
 

document.getElementById("person").innerHTML = person.zeigeProfil();


//- Lege dann eine zweite Person mit den gleichen Eigenschaften aber anderen Werten an
//Die 2. Person soll ebenfalls eine Funktion zeigeProfil habe, die aber dieses Mal als Arrow-Function definiert ist

let person2 = {
    vorname: 'Ozzy',
    nachname: 'Osbourne',
    alter: 75,
    familienstand: 'verheiratet',
    groesse: 1.78,
    zeigeProfil2: () => {
         return `
          <br>
          <p>Name: ${person2.vorname}</p>
          <p>Nachname: ${person2.nachname}</p>
          <p>Alter: ${person2.alter} Jahre</p> 
          <p>Familienstand: ${person2.familienstand}</p>
          <p>Grösse: ${person2.groesse} cm</p>`;
     }
 };

 document.getElementById("person2").innerHTML = person2.zeigeProfil2();

 
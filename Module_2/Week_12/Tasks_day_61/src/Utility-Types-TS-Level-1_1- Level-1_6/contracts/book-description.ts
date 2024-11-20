//- Lege eine neue Datei an book-description.ts an
//- Erstelle dort einen neuen Type BookDescription basierend auf IBook
//- BasicBook soll folgende Eigenschaften von IBook übernehmen haben : - name: string;- shortDescription: string//
import IBook from "./IBook";

export type TBookDescription = Pick <IBook, "name" | "shortDescription">;

//Lege eine Variable bookDescription vom Typ BookDescription an und vergebe nur die nötigen Eigenschaften

const bookDescription : TBookDescription = {
     name: "Joanne Daye",
     shortDescription: "A book full of mouthwatering recipes"
};

//Lege dann ein neues Interface IBookDescription basierend auf IBook an - ebenfalls name und shortDescription von IBook übernommen

export interface IBookDescription extends Pick <IBook,  "name" | "shortDescription"> {}; 

//Lege eine Variable bookDescription2 vom Typ IBookDescription an und vergebe nur die nötigen Eigenschaften

const bookDescription2 : IBookDescription = {
    name: "Jonny Doye",
    shortDescription: "A book full of amazing every day recipes"
};
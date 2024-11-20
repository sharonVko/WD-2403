//- Lege eine neue Datei an required-book.ts an
//- Erstelle dort einen neuen Type RequiredBook basierend auf IBook
//- Alle Eigenschaften von IBook sind required ⇒ müssen angegeben werden
import IBook from "./IBook"

export type TRequiredBook = Required<IBook> ;

//Lege eine Variable requiredBook vom Typ BookDescription an und alle nötigen Eigenschaften

const requiredBook : TRequiredBook = {
    author: "George Duey",
    name: "Desserts & more",
    publishingYear: "2004",
    shortDescription: "For the sweet days",
    numberOfPages: 347
};

//Lege dann ein neues Interface IRequiredBook basierend auf IBook an ⇒ alle Eigenschaften sind auch hier Pflicht

export interface IRequiredBook extends Required <IBook> {}

//Lege eine Variable requiredBook2 vom Typ IRequiredBook an und vergebe alle nötigen Eigenschaften
const requiredBook2 : IRequiredBook = {
    author:"Don Jae",
    name: "Cocktails",
    publishingYear: "2012",
    shortDescription: "A must for every hobby bartender!",
    numberOfPages: 301
};
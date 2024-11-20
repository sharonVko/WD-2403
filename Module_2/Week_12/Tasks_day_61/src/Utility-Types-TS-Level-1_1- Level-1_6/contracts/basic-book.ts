import IBook from "./IBook";

//- Lege eine neue Datei an basic-book.ts an
//- Erstelle dort einen neuen Type BasicBook basierend auf IBook

//- BasicBook soll folgende Eigenschaften nicht haben: publishingYear: string; - shortDescription: string;
export type TBasicBook = Omit <IBook, "publishingYear" | "shortDescription"> ;

//Lege eine Variable basicBook vom Typ BasicBook an und vergebe nur die nötigen Eigenschaften
const basicBook : TBasicBook = {
    author: "James Dae",
    name: "Cakes & Desserts",
    numberOfPages: 273,
};

//Lege dann ein neues Interface IBasicBook basierend auf IBook an, bei dem ebenfalls publishingYear und shortDescription fehlen

export interface IBasicBook extends Omit<IBook, "publishingYear" | "shortDescription"> {};

//Lege eine Variable basicBook2 vom Typ IBasicBook an und vergebe nur die nötigen Eigenschaften

const basicBook2 : IBasicBook = {
    author: "Jane Dae",
    name: "Soups & Salads",
    numberOfPages: 245,
}; 
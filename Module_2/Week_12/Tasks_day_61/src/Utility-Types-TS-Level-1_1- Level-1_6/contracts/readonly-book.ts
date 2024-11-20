//- Lege eine neue Datei an readonly-book.ts an
//- Erstelle dort einen neuen Type ReadOnlyBook basierend auf IBook
//- Alle Eigenschaften von IBook sind readonly ⇒ schreibgeschützt//

import IBook from "./IBook";

export type TReadOnlyBook = Readonly<IBook>;

//- Lege eine Variable readonlyBook vom Typ ReadOnlyBook an und vergeben alle nötigen Eigenschaften und Werte


const readonlyBook :TReadOnlyBook = {
    author: "Reed Ownlee",
    name: "R.E.A.D.",
    publishingYear: "2021",
    shortDescription: "Just read!!! Nothing more to say...",
    numberOfPages: 101
};
//- Versuche nachträglich Werte zu setzen

/* readonlyBook.name = "Cannot assign to 'name because it is a read-only property." */


//Lege dann ein neues Interface IReadOnlyBook basierend auf IBook an ⇒ alle Eigenschaften sind auch hier schreibgeschützt

export interface IReadOnlyBook extends Readonly<IBook> {};

//Lege eine Variable readonlyBook2 vom Typ IReadOnlyBook an und vergebe alle nötigen Eigenschaften und Werte

const readonlyBook2 : IReadOnlyBook = {
    author: "Ann Lee Reed",
    name: "Only",
    publishingYear: "2024",
    shortDescription: "The only book you need to read this year!",
    numberOfPages: 263
};

//- Versuche nachträglich Werte zu setzen

/* readonlyBook2.numberOfPages = "Cannot assig to'numberOfPages' because it is a read-only property" */
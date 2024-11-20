//- Lege eine neue Datei an partial-book.ts an
// Erstelle dort einen neuen Type PartialBook basierend auf IBook
import IBook from "./IBook"

export type TPartialBook = Partial<IBook>;

//Lege eine Variable partialBook vom Typ PartialBook an und vergebe nur die Eigenschaften author und name
const partialBook: TPartialBook = { 
    author: "John Doe", 
    name: "Cooking Book"
 };

//Lege dann ein neues Interface IPartialBook basierend auf IBook an 
export interface IPartialBook extends Partial<IBook> {}

//Lege eine Variable partialBook2 vom Typ IPartialBook an und vergeben nur die Eigenschaft name

const partialBook2: IPartialBook = {
    name: "Janes' kitchen"
}; 
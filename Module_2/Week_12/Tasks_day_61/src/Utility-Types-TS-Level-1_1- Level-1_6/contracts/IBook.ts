
//Erstelle ein Interface IBook mit folgenden Eigenschaften

interface IBook {
    author: string;
    name: string;
    publishingYear: string;
    shortDescription?: string;
    numberOfPages: number
};


export default IBook;
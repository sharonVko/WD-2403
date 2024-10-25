//Wir wollen die Grundlagen für eine Streaming-App schaffen.
//Hierzu brauchen wir die Klassen: Series (= Serie), Episode (=Episode) und Actor (=Darsteller:in)

//Es besteht folgender Zusammenhang
//- Serien haben Episoden
//- Episoden haben Darsteller:innen

import Series from "./classes/Series";
import Episode from "./classes/Episode";
import Actor from "./classes/Actor";

//Überlege dir sinnvolle Datentypen für die Eigenschaften.
//Lege 3 Serien mit ein paar Episoden und Darsteller:innen an


const friends = new Series ("Friends", "Comedy", 1994, 2004, []);

const shameless = new Series("Shameless", "Comedy/Drama", 2011,2021, []);
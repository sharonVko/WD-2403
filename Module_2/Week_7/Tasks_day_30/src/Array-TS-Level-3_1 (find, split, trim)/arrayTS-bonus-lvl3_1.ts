console.log("practice find, split, trim");

const artworks: string[] = [    "Die Sternennacht - Vincent van Gogh",
    "Guernica - Pablo Picasso",
    "Die Geburt der Venus - Sandro Botticelli",
    "Die Nachtwache - Rembrandt",
    "Die Mona Lisa - Leonardo da Vinci",
    "Die Kartoffelesser - Vincent van Gogh",
    "Die Schrei - Edvard Munch",
    "Das letzte Abendmahl - Leonardo da Vinci",
    "Die freudige Botschaft - James Tissot",
    "Der Garten der Lüste - Hieronymus Bosch"] 


    const artworkDates: string[] = ["Die Sternennacht - 1889",
"Guernica - 1937",
"Die Geburt der Venus - 1486",
"Die Nachtwache - 1642",
"Die Mona Lisa - 1503",
"Die Kartoffelesser - 1885",
"Die Schrei - 1893",
"Das letzte Abendmahl - 1495",
"Die freudige Botschaft - 1885",
"Der Garten der Lüste - 1505"]



function searchArtwork=(artworkName: string) => {
    
    const findArt = artworks.find((paramFreiWählbar:string) => paramFreiWählbar.includes(artworkName));/* da wir einen neuen string entwerfen sollen, in einer neuen variable speichern  */
    const artworkDateSearchResult = artworkDates.find((paramFreiWählbar:string) => paramFreiWählbar.includes(artworkName));

    console.log(findArt);
    console.log(artworkDateSearchResult);
      /* schaut euch nochmal  truthy und falsy bei if an! */  
      if (findArt && artworkDateSearchResult){
        /* hier müssen wir wenn unsere werte gefunden worden sind, jetzt einen neuen string basteln aus den drings "findArt" und "artworkSearchResult" */
        const artistResultSplit = findArt.split(" - ");
        const artworkDateSplit = artworkDateSearchResult.split(" - ")
      }
}

/* will try again soon */

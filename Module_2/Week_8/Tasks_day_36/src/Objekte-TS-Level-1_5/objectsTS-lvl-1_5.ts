console.log("practice objects");

type Lager = {
    schreibtisch: {
        schublade: string;
    };
    schrank: {
        "Obere Schublade": {
            Ordner1: string;
            Ordner2: string;
        };
        "Untere Schublade": string;
    };
};

let unserLager: Lager = {
    schreibtisch: {
        schublade: "Hefter"
    },
    schrank: {
        "Obere Schublade": {
            Ordner1: "Dokumente",
            Ordner2: "Geheimnisse"
        },
        "Untere Schublade": "Cola"
    }
};

console.log(unserLager);
console.log(unserLager.schrank["Obere Schublade"].Ordner2); /* console returns: Geheimnisse */
console.log(unserLager.schrank["Untere Schublade"]); /* console returns: cola */
console.log(unserLager.schreibtisch.schublade);/* console returns: Hefter */


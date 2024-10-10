console.log("practice loops");

let friendNames:string[] = ["Georg", "Anass", "Elaine", "Hakan", "Eric", "Kim", "Sergio"];

for(let friends:number = 0; friends <= 6; friends++){
    console.log(friendNames[friends])  /* console returns: Georg
    loopsTS-lvl-1_4.ts:6 Anass
    loopsTS-lvl-1_4.ts:6 Elaine
    loopsTS-lvl-1_4.ts:6 Hakan
    loopsTS-lvl-1_4.ts:6 Eric
    loopsTS-lvl-1_4.ts:6 Kim
    loopsTS-lvl-1_4.ts:6 Sergio */
};


for(let friends2:number = 0; friends2 < friendNames.length; friends2++){
    console.log(friendNames[friends2]); /* console returns the same, but this is probably the better option */
    
};


for( const friends3 of friendNames){
    console.log(friends3);  /* console returns the same output */
    
}
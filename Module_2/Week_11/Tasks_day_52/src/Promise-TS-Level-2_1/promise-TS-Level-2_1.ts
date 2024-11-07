// (a.k.a number-methods.ts)

//Erstelle ein Promise vom Typ number[]
//Lass dir mit Math.random drei zufällige Werte zwischen 1 und 130 generieren
const randomNumbers:Promise<number []> = new Promise((resolve, reject) => {
    const num1:number = Math.floor(Math.random() * 130) + 1; 
    const num2:number = Math.floor(Math.random() * 130) + 1; 
    const num3:number = Math.floor(Math.random() * 130) + 1; 
    if(num1 <100 ||num2 < 100||num3 < 100) {
        resolve([num1, num2, num3]); 
     } else {
                reject('Sorry, at least one number is too big')
            } 
});

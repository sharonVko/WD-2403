console.log("test");

const generateLottoNumber = () => {
    try{

    const lottoNumber: number = Math.round(Math.random() * 100)
    
    if(lottoNumber > 49){
        throw new Error("number is bigger than 49")
    } else {
        /* console.log(`Your number is ${lottoNumber}`); */
        return lottoNumber
    }

    }catch (err) {
        console.log("Sorry, the number was too big");
        
    }
    
}

generateLottoNumber()
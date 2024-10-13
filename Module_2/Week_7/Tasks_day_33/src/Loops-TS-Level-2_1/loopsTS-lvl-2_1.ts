console.log("practice loops & conditionals");


/* declare a function called createImageNames */
const createImageNames = ():string [] => {

    let returnArray: string [] = []; /* declaring the empty array */

    for(let img: number = 0; img <= 100; img++) { /* for loop until 100 */
    //    let imgFileName: string = `image_${img}.jpg`; /* create filename  */

    let imgFileName: string;
    if(img < 10){
        imgFileName = `image_00${img}.jpg` /* img number below 10 will be named image_003.jpg , for example */
    } if(img < 100){
        imgFileName = `image_0${img}.jpg`
    } else{
        imgFileName = `image_${img}.jpg` /* named with complete image number if bigger than 100 */
    }
       returnArray.push(imgFileName); /* and add to array */
    }
       return returnArray;
       
    } 
    
let imageNames = createImageNames(); /* call function & show dataname result */
console.log(imageNames);

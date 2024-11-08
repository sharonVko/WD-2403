console.log("test");

const processData = (numArr:number[], callbackOne:(numArr:number[]) => number[], callbackTwo:(numArr:number[]) => number[]): Map<number,string> => {

    const sortDescArr = callbackOne(numArr);

    const doubleArr = callbackTwo(sortDescArr);
}
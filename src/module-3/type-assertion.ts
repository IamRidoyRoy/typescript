let emni: any;
emni = "I am the next level web developer";
(emni as string)

function kgToGram(param: string | number): string | number | undefined {
    if (typeof param === 'string') {
        const value = parseFloat(param) * 1000;
        return `The converted value of kg to gram ${value}`;
    }
    if (typeof param === 'number') {
        const value = param * 1000;
        return `The converted value of kg to gram ${value}`
    }
}
// we know more than ts as it's number or string so that we deine it as string or number
const resultTOBe = kgToGram(100) as number;
const resultTOBes = kgToGram('100') as string;

console.log(resultTOBe, resultTOBes);

// trying with try catch 
type customErr = {
    message: string;
}
try {

}
catch (err) {
    console.log((err as customErr).message)
}
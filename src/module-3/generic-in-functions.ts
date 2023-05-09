
// Arrow Finction 
const createArray = (params: string): string[] => {
    return [params];
}

// Generic arrow functions 
const createArray2 = <T>(params: T): T[] => {
    return [params];
}

const result1 = createArray("Bangladesh");
const result2 = createArray2<boolean>(true)
const result3 = createArray2<string>('Check the string')
const result4 = createArray2<number>(325)
const result5 = createArray2<object>({ name: 'Ridoy' })

console.log(result1, result2, result3, result4, result5);



// Use Generic constrains 

type Mandatory = { name: string, age: number, salary: number }

const crushMind = <T extends Mandatory>(myInfo: T) => {
    const crush = 'Monisha';
    const newData = { ...myInfo, crush };
    return newData;
}

type MyInfoType = {
    name: string,
    age: number,
    salary: number
}

const myInfo = {
    name: "Mr. Roy",
    age: 25,
    salary: 30000,
}

const result11 = crushMind(myInfo);
console.log(result11)
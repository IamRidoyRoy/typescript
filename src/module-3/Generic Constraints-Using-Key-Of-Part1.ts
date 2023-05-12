type PersonType = {
    name: string,
    age: number,
    address: string
}

type newType = "name" | "age" | "address"   //I did it manually 


// here Y makes a union type Y = 'name' | 'age'
function getProperty<X, Y extends keyof X>(obj: X, key: Y) {
    obj[key]
}


const property = getProperty({ name: 'Mr. X', age: 100 }, 'age')
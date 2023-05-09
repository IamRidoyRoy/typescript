// Generic in interface 

interface crushInterface<T> {
    name: string,
    girlfriend: T
}

const crush: crushInterface<boolean> = {
    name: "Monisha",
    girlfriend: true
}

// Another generic interface 
interface crushInterface2<T, U = null> {
    name: string,
    husband: T,
    wife?: U
}
const crushBrush: crushInterface2<
    { name: string, age: number },
    { name: string, age: number }
> = {
    name: 'Whoa',
    husband: {
        name: 'Ami',
        age: 25,
    },
    wife: {
        name: 'tumi',
        age: 25,
    }

}
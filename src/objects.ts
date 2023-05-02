const newUser: {
    company: string,
    name: string,
    readonly age: number,
    isMarried: boolean,
    wife?: boolean

} = {
    company: "Heart Soft Tech",
    name: 'Ridoy Roy',
    age: 25,
    isMarried: false,
    wife: false
}
// If we use readonly we can't change the value
// newUser.age = 55
console.log(newUser)
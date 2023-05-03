
// type 
type NoobDeveloper = {
    name: string;
}

// Here newDeveloper combine with JuniorDeveloper - This is called intersection
type JuniorDeveloper = NoobDeveloper & {
    expertise: string,
    experience: number
}

type NextLevelDeveloper = JuniorDeveloper & {
    LedershipEx: number,
    level: 'junior' | 'mid' | 'Senior'
}

// Here is main union 
const newDeveloper: NoobDeveloper | JuniorDeveloper = {
    name: "Ridoy",
    expertise: 'JavaScript',
    experience: 1,
}

const developer: NextLevelDeveloper = {
    name: 'Next Ridoy',
    experience: 2,
    expertise: 'JavaScript',
    level: 'mid',
    LedershipEx: 2,

}


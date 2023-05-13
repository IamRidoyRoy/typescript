type a = number;
type b = undefined;
type c = number;

type d = a extends string ? string : null;


// nested conditional type 
type d2 = a extends null ? null : b extends number ? number : c extends number ? number : never;


// Check koro j seikh er moddhe wife3 ache kina?
type seikh = {
    wife1: string;
    wife2: string
}

type check<T> = T extends { wife3: string } ? true : false;

type CheckProperty = check<seikh>;
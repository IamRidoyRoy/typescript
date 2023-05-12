
// Mocking
const makePromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        const data: string = "Data is fetched";
        if (data) {
            resolve(data);
        }
        else {
            reject("The questin is failed to fetch");
        }
    })
}

const getPromiseData = async (): Promise<string> => {
    const data = await makePromise();
    return data;
}


// Create a interface to declare datatype 
interface Itodo {
    userId: number,
    id: number,
    title: string,
    body: string,
    completed: boolean,

}
// Fetch dada with async
const getToDo = async (): Promise<Itodo> => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    return await res.json();
}

const getData = async (): Promise<void> => {
    const result = await getToDo();
    console.log(result)
}

getData();
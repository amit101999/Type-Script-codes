// generic are same as c++ and java used to create custome type 

const func = <CustomType>(n: CustomType): CustomType => {
    let text: CustomType
    return n;
}

const ans = func("amit")

type Person = {
    name: string,
    age: number
}

const myfunc1 = <T>(n: T): T => {
    let text: T
    return n;
}

const myP: Person = {
    name: "amit",
    age: 25
}

const ans1 = myfunc1<Person>(myP)

const fun1 = <T, U>(n: T, o: U): { n: T, o: U } => {
    return { n, o }
}
const res = fun1<number, string>(10, "amit")


// extends .... 
type Person1 = {
    name: string,
    age: number,
}
type Person2 = {
    name: string,
    age: number,
    email: string
}

const p1: Person1 = {
    name: "amit",
    age: 25
}
const p2: Person2 = {
    name: "atul",
    age: 24,
    email: "amit@gmial.com"
}
const func2 = <T, U extends T>(x: T, y: U): { x: T, y: U } => {
    return { x, y }
}

const ans2 = func2<Person1, Person2>(p1, p2)


const myP2: Person1[] = [
    {
        name: "amit",
        age: 25
    },
    {
        name: "atul",
        age: 24
    },
    {
        name: "anil",
        age: 23
    }

]

const filterByPeople = <T, key extends keyof T>(arr: T[], property: key, value: T[key]): T[] => {
    return arr.filter((item) => item[property] === value)
}

const result = filterByPeople(myP2, "name", "amit")
const result2 = filterByPeople(myP2, "age", 25)

console.log(result2)








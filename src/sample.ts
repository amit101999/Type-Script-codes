// let name1: string = "hello world 1!!!"
// //  first syntax

// console.log(name1)

// let name2 = <string>"hello world 2!!!"

// console.log(name2)


// // union variable ---> means variable which have 2 types
// // name can ne amit, amitThe3rd

// let surname: string | number = "thakur"

// // functions with implicit return type
// const fun1 = (n1: number) => {
//     console.log(n1)
// }




// // here return type is string
// const fun2 = (n1: number): string => {
//     console.log(n1)
//     return "return value is 10"
// }


// // creating custom type for variable , iss ham apne custom datatype bana sakthe hai
// type userName = string | number

// const name3: userName = "hello amit "
// const age1: userName = 25


// // means userFun take 2 parameters number and staring and return number
// type userFun = (num1: number, course1: string) => number
// const userFun1: userFun = (numA, strB) => {
//     console.log(numA, strB)
//     return 10
// }


// // Arrays of number
// let arr1: number[] // empty array
// let arr: number[] = [1, 2, 3, 4, 5]

// // used in generic
// let arr2: Array<number> = [1, 2, 3]

// let arr3: Array<number | string> = ["amt", 2, 3, "hello", 1]
// arr[3] = 12

// // fixed sized arrays called tuples
// let arr4: [number, number, string] = [1, 2, "amt"]


// // objects
// const obj1: {
//     height: number,
//     age: number,
//     name: string
// } = {
//     height: 10,
//     age: 25,
//     name: "amit"
// }

// type Obj = {
//     height: number,
//     name: string
//     gender?: string
//     //  ? means this property is optional
// }

// const obj2: Obj = {
//     height: 10,
//     name: "amit"
// }





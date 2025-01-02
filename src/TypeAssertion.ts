// //type assertions is used to tell to treate the element in html format
// const btn = document.getElementById("btn") as HTMLElement
// // or use like
// // const btn = <HTMLElement>document.getElementById("btn")
// //  or  use like this which means not null and type assertion is use to tell specific element
// // const btn = document.getElementById("btn")!

// // interface Person {
// //     name: string;
// //     course: string
// // }

// // const myObj: Person = {
// //     name: "John Doe",
// //     course: "JavaScript"
// // }

// // const getName = (): string => {
// //     return myObj.name
// // }

// // const getCourse = (): string => {
// //     return myObj.course
// // }

// // // now if we want to create a single function that calls both
// // const getData = (key: string): string => {
// //     return myObj[key]
// // }
// // this will give error


// // now to remove the error we use index signature for this .............

// // change the interface for rest the same
// // interface Person {
// //     [key: string]: string
// // means key can be anything which is in the object like muObj
// //  but now it will create an issue that key we pass can be no present in the object
// // now will use 3rd method
// // }

// // const myObj: Person = {
// //     name: "John Doe",
// //     course: "JavaScript"
// // }

// // const getName = (): string => {
// //     return myObj.name
// // }

// // const getCourse = (): string => {
// //     return myObj.course
// // }

// // // now if we want to create a single function that calls both
// // const getData = (key: string): string => {
// //     return myObj[key]
// // }


// // 3rd way most efficient using keyOF .................................

// interface Person {
//     name: string;
//     course: string
// }
// const myObj: Person = {
//     name: "John Doe",
//     course: "JavaScript"
// }

// const getName = (): string => {
//     return myObj.name
// }

// const getCourse = (): string => {
//     return myObj.course
// }

// // now if we want to create a single function that calls both
// const getData = (key: keyof Person): string => {
//     return myObj[key]
// }


// const myObj2: Person = {
//     name: "amit",
//     course: "react"
// }

// // const key = "name"
// let key = "name"
// myObj2[key as keyof Person]
// // since we use let key can be anything so we use type assertions that is keyOf
// //  but if we use  const key = "name" we dont require type assertions since value will not change

// // now here we have access of the Person interface now if we are using 3rd party inteface
// // then we use  like this
// myObj2[key as keyof typeof myObj2] 

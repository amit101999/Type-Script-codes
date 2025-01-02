"use strict";
// const fun1 = (name1: string, age: number): boolean => {
//     console.log(name1, age)
//     return false
// }
// // other way
// type funType = (n: string, a: number, gender?: string) => boolean
// // ? means this is optional
// const fun2: funType = (name1, age) => {
//     console.log(name1, age)
//     return false
// }
// fun2("amit", 20)
// // with default value
// const fun3: funType = (name1, age, gender = "male") => {
//     console.log(name1, age)
//     return false
// }
// // also use ? in typedef otherwise it will give error while calling
// fun3("amit", 20)
// // other way
// const fun4 = (name1: string, age: number, gender: string = "male"): boolean => {
//     console.log(name1, age)
//     return false
// }
// // now we dont have to use ? for optional
// fun4("amit", 20)
// // rest operator
// type funRest = (n: number, m: number, nam1: string) => string
// // if return type is number[] instead of string
// const fun5: funRest = (...m) => {
//     return "amit"
// }
// // change ...m to ...m:number[] and  return m
// fun5(10, 20, "amit")
// ////////
// type f = (...m: number[]) => number;
// const fun6: f = function lol(n) {
//     return 1
// }
// // funtions with objects
// const getData = (prd: { name: string, stock: number, price: number }) => {
//     console.log(prd.name, prd.stock, prd.price)
// }
// // 2nd way ......
// // type getDataType = (prd: {
// //     name: string,
// //     stock: number,
// //     price: number
// //     photo: string
// // }) => void
// // const getPrdData: getDataType = (prd) => {
// //     console.log(prd)
// // }
// // const prdDes = {
// //     name: "appple",
// //     stock: 46,
// //     price: 15234
// // }
// // getPrdData(prdDes)
// // this gives error since photo is not defined
// ///////////////////////////////////////
// //  3rd way
// interface prdType {
//     name: string,
//     stock: number,
//     readonly price: number
//     photo?: string
// }
// // now use ? to make property option
// //  create type using the interface
// type getDataType = (prd: prdType) => void
// const getPrdData: getDataType = (prd) => {
//     console.log(prd)
// }
// // now this way we will get the error in the intialization instead of calling the method
// const prdDes: prdType = {
//     name: "appple",
//     stock: 46,
//     price: 15234
// }
// getPrdData(prdDes)

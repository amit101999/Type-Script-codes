"use strict";
// // by default public hota hai
// class Player {
//     // 1st way
//     // private height;
//     // weight;
//     // constructor(height: number, weight: number) {
//     //     this.height = height;
//     //     this.weight = weight;
//     // }
//     // 2nd way is same as 1st way
//     constructor(private height: number, public weight: number, protected age?: number) { }
//     setHeight = () => {
//         return this.height
//     }
// }
// class Myplayer extends Player {
//     constructor(height: number, weight: number, age: number) {
//         super(height, weight, age)
//     }
//     getAge = () => {
//         return this.age
//     }
// }
// const p1 = new Player(10, 15)
// console.log(p1.setHeight())
// console.log(p1.weight)
// const myP1 = new Myplayer(10, 20, 30)
// console.log(myP1.setHeight())
// console.log(myP1.weight)
// console.log(myP1.getAge())
// class student {
//     constructor(public name: string, private rollNo: number) { }
//     set setName(val: string) {
//         this.name = val
//     }
//     get getName(): string {
//         return this.name
//     }
// }
// const s1 = new student("atul", 101)
// console.log(s1.getName)
// s1.setName = "amit"
// console.log(s1.getName)
// interface PrdType {
//     name: string
//     price: number
//     stock: number
//     offer?: boolean
// }
// interface giveId {
//     getId: () => string
// }
// class Product implements PrdType, giveId {
//     private id: string = "101011"
//     constructor(public name: string, public price: number, public stock: number) { }
//     getId = () => {
//         return this.id
//     }
// }
// const prd1 = new Product("mac", 12486, 150)
// console.log(prd1.getId())

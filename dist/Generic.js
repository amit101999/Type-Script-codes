"use strict";
// generic are same as c++ and java used to create custome type 
const func = (n) => {
    let text;
    return n;
};
const ans = func("amit");
const myfunc1 = (n) => {
    let text;
    return n;
};
const myP = {
    name: "amit",
    age: 25
};
const ans1 = myfunc1(myP);
const fun1 = (n, o) => {
    return { n, o };
};
const res = fun1(10, "amit");
const p1 = {
    name: "amit",
    age: 25
};
const p2 = {
    name: "atul",
    age: 24,
    email: "amit@gmial.com"
};
const func2 = (x, y) => {
    return { x, y };
};
const ans2 = func2(p1, p2);
const myP2 = [
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
];
const filterByPeople = (arr, property, value) => {
    return arr.filter((item) => item[property] === value);
};
const result = filterByPeople(myP2, "name", "amit");
const result2 = filterByPeople(myP2, "age", 25);
console.log(result2);

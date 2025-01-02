"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./style.css");
const todos = [];
const todoContainer = document.querySelector("todoContainer");
const todoInput = document.getElementsByTagName('input')[0];
const myForm = document.getElementById("myForm");
myForm.onsubmit = (e) => {
    e.preventDefault();
    const todo = {
        title: todoInput.value,
        isCompleted: false,
        id: String(Math.random() * 1000)
    };
    todos.push(todo);
    todo.
        console.log(todos);
};

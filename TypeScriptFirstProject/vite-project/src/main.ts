import './style.css'

interface Todo {
    title: string,
    isCompleted: boolean,
    readonly id: string
}

const todos: Todo[] = []

const todoContainer = document.getElementById("todoContainer") as HTMLDivElement
const todoInput = document.getElementsByTagName('input')[0] as HTMLInputElement

const myForm = document.getElementById("myForm") as HTMLFormElement

myForm.onsubmit = (e: SubmitEvent) => {
    e.preventDefault()

    const todo: Todo = {
        title: todoInput.value,
        isCompleted: false,
        id: String(Math.random() * 1000)
    }
    todos.push(todo)
    todoInput.value = ""
    renderTodo(todos)
}

const generateTodoItem = (title: string, isCompleted: boolean) => {
    const todo: HTMLDivElement = document.createElement("div")
    todo.className = "todo"

    //creating a checkBox
    const checkBox: HTMLInputElement = document.createElement("input")
    checkBox.setAttribute("type", "checkBox")
    checkBox.className = "isCompleted"
    checkBox.checked = isCompleted

    // creating paragraph for the todos
    const paragraph: HTMLParagraphElement = document.createElement("p")
    paragraph.innerText = title

    const btn: HTMLButtonElement = document.createElement("button")
    btn.innerText = "X"
    btn.className = "deleteBtn"

    todo.append(checkBox, paragraph, btn)
    todoContainer.append(todo)

}


const renderTodo = (todos: Todo[]) => {
    todoContainer.innerText = ""
    todos.forEach((item) => {
        generateTodoItem(item.title, item.isCompleted)
    })
    console.log("hello")
}
import { AppBar, Container, Toolbar,Stack , Typography, TextField, Button } from '@mui/material'
import  { useState } from 'react'
import TodoItem from './Component/TodoItem'


const App = () => {
  const [todos, setTodos] = useState<TodoItemType[]>([])

  const [title , setTitle] = useState<TodoItemType["title"]>("")

  const completeHandler = ( id : TodoItemType["id"]) : void => {
    
    const completeTodo :TodoItemType[] = todos.map((item) => {
      if (item.id === id) {
        return {...item, isCompleted : !item.isCompleted}
      }
      return item
    })
    setTodos(completeTodo)

  }

  const deleteHandler = (id : TodoItemType["id"] ) : void => { 
    const newTodos :TodoItemType[] = todos.filter((item) => {
      if (item.id !== id) {
        return item
      }
    })
    setTodos(newTodos)
  }

  const updateHandler = (id : TodoItemType["id"] , val :TodoItemType["title"]) => {
    const completeTodo :TodoItemType[] = todos.map((item) => {
      if (item.id === id) {
        return {...item, title : val}
      }
      return item
    })
    setTodos(completeTodo)
  }

  const submitHandler = () : void => {
    const newTodo: TodoItemType = {
      title : title,
      isCompleted : false,
      id : String(Math.random() * 1000)
    }

    setTodos((prev) => ([...prev, newTodo]))
    setTitle("")
  }


  return (
    <div>
      <Container maxWidth="sm" sx ={{height :  "90vh"}}>
        <AppBar position='static'>
          <Toolbar>
            <Typography>
              Todo App
            </Typography>
          </Toolbar>
        </AppBar>
      <Stack height={"80%"} direction={"column"}
        spacing={"1rem"} p={"1rem"} >
        {
          todos.map((item) => (
            <TodoItem deleteHandler = {deleteHandler}
              completeHandler={completeHandler}
              updateHandler={updateHandler} 
              key={item.id} todo={item} />
          ))
          }
      </Stack>
        <TextField value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth label={"New Task"} />
        <Button
          disabled={title == ""}
          sx={{ margin: "1rem" }} variant='contained' fullWidth
        onClick={submitHandler} >Add</Button>
        </Container>
    </div>
  )
}

export default App
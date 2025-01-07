import { Button, Checkbox, Paper, Stack, TextField, Typography } from "@mui/material"
import {Delete, Edit} from "@mui/icons-material"
import { useState } from "react";

type PropType = {
  todo: TodoItemType;
  deleteHandler: (id: TodoItemType["id"]) => void;
  completeHandler: (id: TodoItemType["id"]) => void
  updateHandler : (id :TodoItemType["id"] ,val : TodoItemType["title"]) => void
}


const TodoItem = ({ todo ,completeHandler,deleteHandler , updateHandler }: PropType) => {
  
  const [editActive, setEditActive] = useState<boolean>(false)
  
  const [textVal , setTextVal] = useState<TodoItemType["id"]>(todo.title)
  
  return (
    <>
      <Paper variant="elevation">
        <Stack direction={"row"} alignItems={"center"}>
        <Checkbox checked={todo.isCompleted}  onChange={()=> completeHandler(todo.id)} />
          {
            editActive ? (
              <TextField value={textVal}
                onChange={(e) => setTextVal(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && textVal !="") { 
                    updateHandler(todo.id , textVal)
                    setEditActive(false)
                  }
              }}
              />
            ): (
              <Typography marginRight={"auto"}>{todo.title}</Typography>
            )
        }
          <Button >
            <Edit onClick={()=>setEditActive((prev)=> !prev)} color="secondary" />
          </Button>  
          <Button onClick={()=> deleteHandler(todo.id)}>
          <Delete color="primary" />
          </Button>  
        </Stack>
      </Paper>
    </>
  )
}

export default TodoItem
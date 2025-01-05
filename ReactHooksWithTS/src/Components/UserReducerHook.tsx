import  { useReducer } from 'react'


type StateType = {
    count :number
}

type actionType = { type: "Increment",payload :number } | { type: "decrement",payload :number }  

const reducer = (state: StateType, action: actionType): StateType => {

    switch (action.type) {
        case "Increment":
            return { count: state.count + action.payload }
            break;
        case "decrement":
            return { count: state.count - action.payload }
            break;
        default:
            return state
    }
}

const initialState : StateType = {
    count :0
}

const UserReducerHook = () => {

    const [state , dispatch] = useReducer(reducer, initialState)


    const increment = () => {
        dispatch({
            type: "Increment",
            payload : 1
        })
    }
    const decrement = () => {
        dispatch({
            type: "decrement",
            payload :1
        })
    }

  return (
      <div>
          Count change
          <p>count : {state.count}</p> 
          <button onClick={increment}> + </button>
          <button onClick={decrement}> - </button>
    </div>
  )
}

export default UserReducerHook
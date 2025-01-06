import { useState } from "react"
import { useDispatch , useSelector } from "react-redux";
import { increment , StateType } from "./store/redux";

const App = () => {


  const [val ,setVal] = useState<number>(0)

  const dispatch = useDispatch();
  const count  = useSelector( (state: StateType) => state.count)

  const icrementByValue = () => {
    dispatch(increment(val))
  }

  return (
    <div>
      <h1>Counter : { count} </h1> 
      <input type="number" value={val} onChange={e=>setVal(Number(e.target.value))} />
      <button disabled = {val < 0 } onClick={icrementByValue}> Add Value </button>
    </div>
  )
}

export default App
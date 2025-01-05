// import Form from './Components/Form'
// import { useState } from "react"
// import MyApp from './Components/MyApp'

import USeContextHook from "./Components/USeContextHook"
import UserReducerHook from "./Components/UserReducerHook"



const App = () => {
  // const [val, setVal] = useState<string>("")
  return (
    <div>
      {/* <Form label={"search"} value={val} setter={setVal} /> */}
      {/* <MyApp /> */}
      {/* <USeContextHook /> */}
      <UserReducerHook />
    </div>
  )
}
export default App
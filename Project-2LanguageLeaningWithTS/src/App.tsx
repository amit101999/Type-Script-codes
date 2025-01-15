import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import { lazy, Suspense } from "react"
import Header from "./Component/Header"
import Loader from "./Component/Loader"
import Learning from "./Component/Learning"
const Home = lazy(()=> import("./Component/Home") )
const Quiz = lazy(()=> import("./Component/Quiz") )
const Result = lazy(()=> import("./Component/Result") )
const Login = lazy(()=> import("./Component/Login") )



const App = () => {
  return (
    <Router>
      <Header />
        <Suspense fallback={<Loader />}>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learn" element={<Learning />} />
        <Route path="/result" element={<Result />} />
        <Route path="/login" element={<Login />} />
      </Routes>
        </Suspense>
    </Router>
  )
}

export default App
import { Route, Routes} from "react-router-dom"
import Navbar from "./components/Navbar"
import FunctionCom from "./components/FunctionCom"
import ClassCom from "./components/ClassCom"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Navbar/>}>
          <Route path="/" element={<FunctionCom name="kushal"/>} />
          <Route path="/classCom" element={<ClassCom name="kushalthread"/>} />
          <Route path="*" element={<h1>Page not Found...</h1>} />
      </Route>
    </Routes>
  )
}

export default App

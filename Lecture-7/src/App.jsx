import {  Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Body from "./components/Body"
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} >
          <Route path='/' element={<Body />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/about' element={<About />} />
          <Route path='/project' element={<Project />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<PageNotFound />} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App

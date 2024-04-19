import {Route,Routes,} from "react-router-dom";
import Home from "../pages/Home/Home.jsx";
import About from "../pages/About/About.jsx";
function App() {

  return (
   <Routes>
       <Route path="/" element={<Home/>}></Route>
       <Route path="/about" element={<About/>}></Route>
       <Route path="/ourRooms" element={<Home/>}></Route>
       <Route path="/contact" element={<Home/>}></Route>
   </Routes>
  )
}

export default App

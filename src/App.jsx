
import Home from "./routes/Home";
import { Route, Routes} from "react-router-dom";
import Search from "./routes/Search";

function App() {

  return (
    <>
    <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/search/:query" element={<Search/>} />
     </Routes>
    </>
  )
}

export default App

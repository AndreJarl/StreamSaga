
import Home from "./routes/Home";
import { Route, Routes} from "react-router-dom";
import Search from "./routes/Search";
import ShowInfo from "./routes/ShowInfo";

function App() {

  return (
    <>
    <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/search/:query" element={<Search/>} />
       <Route path="/showInfo/:id" element={<ShowInfo/>} />
     </Routes>
    </>
  )
}

export default App


import Home from "./routes/Home";
import { Route, Routes} from "react-router-dom";
import Search from "./routes/Search";
import ShowInfo from "./routes/ShowInfo";
import Popular from "./routes/Popular";
import TopRated from "./routes/TopRated";

function App() {

  return (
    <>
    <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/search/:query" element={<Search/>} />
       <Route path="/showInfo/:id" element={<ShowInfo/>} />
       <Route path="/popular" element={<Popular/>} />
       <Route path="/toprated" element={<TopRated/>} />
     </Routes>
    </>
  )
}

export default App

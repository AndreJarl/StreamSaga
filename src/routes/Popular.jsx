import { useState, useEffect } from "react"
import axios from "axios";
import ShowCard from "../components/ShowCard";
import Navbar from "../components/Navbar";
function Popular(){

    const[shows, setShow] = useState([]);
    const[page, setPage] = useState(1);

    useEffect(()=>{
        const options = {
          method: 'GET',
          url: 'https://api.themoviedb.org/3/tv/popular?language=en-US&page=1',
          headers: {accept: 'application/json'}
        };
        
        axios
          .request(options)
          .then(function (response) {
            console.log(response.data);
            setShow(response.data.results);
            
          })
          .catch(function (error) {
            console.error(error);
          });
    }, [shows])
    return(
        <>
        <div>
              <Navbar/>
      <div className="flex flex-col justify-center items-center mt-20 ">
          <div className="flex flex-col text-center mx-2 justify-around items-center pb-5">
              <p className="text-2xl font-semibold text-left lg:text-5xl">Popular</p>
              <p className="text-sm text-center lg:text-lg text-neutral-400 ">Discover the Hottest Shows Everyone's Talking About!</p>
          </div>
        <div className="grid grid-cols-2 gap-3 items-center justify-center mx-6 lg:mx-20 lg:grid-cols-4  md:grid-cols-3 lg:gap-5">
        {shows.map((show) => (
           <ShowCard key={show.id} shows={show} />
        ))}
      </div>
      <div className="flex flex-row items-center justify-center mx-2">
          <div className="bg-red-900 w-[100px] lg:w-[300px] h-[.5px]"></div>
          <button className="bg-red-900  py-1 px-3 lg:px-7 lg:py-3 text-white mt-5 mb-10">Show more</button>
          <div className="bg-red-900 w-[100px] lg:w-[300px] h-[.5px]"></div>
       </div>     
     </div>
        </div>
        </>
    )
}

export default Popular
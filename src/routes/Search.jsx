import axios from "axios"
import Navbar from "../components/Navbar"
import ShowCard from "../components/ShowCard";
import { useEffect, useState } from "react"
import { useParams } from "react-router";
import img404 from "../assets/404.jpg"

function Search(){

       const [shows, setSearch] = useState([]);
       const {query} = useParams();
       
useEffect(()=>{

const options = {
  method: 'GET',
  url: `https://api.themoviedb.org/3/search/tv?query=${query}&include_adult=false&language=en-US&page=1`,
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTFmMGY4MjYxMTAzMDk1MTRiM2U5MjMxODY3NjE0ZSIsIm5iZiI6MTcyMDEwOTE4Mi42NjI4NzQsInN1YiI6IjY0ZDM1ZDZhMDM3MjY0MDBmZmZjN2M3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tD-t-f53h85Hh1glk58ifjEhhgZ2n1hP9UuQUGdMuDg'
  }
};

axios
  .request(options)
  .then(function (response) {
    setSearch(response.data.results);
  })
  .catch(function (error) {
    console.error(error);
  });
}, [query]);

useEffect(()=>{
     console.log(shows);
}, [shows]);


if(shows.length === 0){
    return(
        <>
        <Navbar/>
    <div className="flex flex-col justify-center items-center mx-10 gap-5 mt-20">
          <p className="text-center text-2xl my-5">No results found for {query}....</p>
          <img width={400} src={img404} alt="" srcset="" />
          </div>
          </>
    )
}


return (
    <>
      <Navbar />
      <div className="my-6 mt-24">
            <p className="text-center text-2xl my-5">{shows.length} results for {query}....</p>
            <div className="grid grid-cols-5 items-center gap-2 justify-center mx-14">
              {shows.map((show) => (
                <ShowCard key={show.id} shows={show} />
              ))}
            </div>
       </div>
    </>
)
}


export default Search
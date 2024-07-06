import axios from "axios"
import Navbar from "../components/Navbar"
import ShowCard from "../components/ShowCard";
import { useEffect, useState } from "react"
import { useParams } from "react-router";

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





    return(
        <>
        <Navbar/>
        <div className="my-10">
            <p className="text-center text-2xl my-5">{shows.length} results for {query}....</p>
        <div className="grid grid-cols-5 items-center gap-3 justify-center mx-14">
        {shows.map((show) => (
           <ShowCard key={show.id} shows={show} />
        ))}
      </div>
        </div>
        </>
    )
}

export default Search
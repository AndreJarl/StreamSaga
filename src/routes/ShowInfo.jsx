import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router";
import Navbar from "../components/Navbar";
import ShowVideo from "../components/ShowVideo";

function ShowInfo(){
    
    const {id} = useParams();
    const ep = 1;
    const season = 1;

    const [shows, setTVShows] = useState([]);

    useEffect(()=>{
        const options = {
          method: 'GET',
          url: `https://api.themoviedb.org/3/tv/${id}?language=en-US`,
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTFmMGY4MjYxMTAzMDk1MTRiM2U5MjMxODY3NjE0ZSIsIm5iZiI6MTcyMDEwOTE4Mi42NjI4NzQsInN1YiI6IjY0ZDM1ZDZhMDM3MjY0MDBmZmZjN2M3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tD-t-f53h85Hh1glk58ifjEhhgZ2n1hP9UuQUGdMuDg'
          }
        };
        
        axios
          .request(options)
          .then(function (response) {
            setTVShows(response.data)
          })
          .catch(function (error) {
            console.error(error);
          });
    },[id]);

    useEffect(()=>{
        console.log(shows)
    },[shows]);

    return(
        <>
         <Navbar/>
         <div className="flex flex-row my-5 justify-center items-center gap-10">
         <ShowVideo shows={shows} ep={ep} season={season}/>
            <div className="flex flex-col justify-center items-center ">
           
            <img src={`https://image.tmdb.org/t/p/w200${shows.poster_path}`} alt={shows.name}  />   
            
            <div className="flex flex-col justify-center gap-6">
            <p className="text-2xl font-bold">{shows.name}</p>
                <p className="w-[600px]">{shows.overview}</p>
                <p>{shows.original_language}</p>
            </div>
            </div>

         </div> 
        </>
    )
}

export default ShowInfo
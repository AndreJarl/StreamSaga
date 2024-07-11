import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Navbar from "../components/Navbar";
import ShowVideo from "../components/ShowVideo";
import Info from "../components/Info";

function ShowInfo() {
  const { id } = useParams();
  const [ep, setEp] = useState(1);
  const [season, setSeason] = useState(1);
  const [show, setShow] = useState(null);
  const [episodes, setEpisodes] = useState([]);
  const [seasons, setSeasons] = useState([]);

  useEffect(() => {
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
        setShow(response.data);
        setSeasons(response.data.seasons);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [id, ep, season]);

  useEffect(() => {
    if (show && season) {
      const seasonOptions = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/tv/${id}/season/${season}`,
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTFmMGY4MjYxMTAzMDk1MTRiM2U5MjMxODY3NjE0ZSIsIm5iZiI6MTcyMDEwOTE4Mi42NjI4NzQsInN1YiI6IjY0ZDM1ZDZhMDM3MjY0MDBmZmZjN2M3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tD-t-f53h85Hh1glk58ifjEhhgZ2n1hP9UuQUGdMuDg'
        }
      };

      axios
        .request(seasonOptions)
        .then(function (response) {
          setEpisodes(response.data.episodes);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  }, [show, season, id]);

  console.log(season);
  console.log(seasons);
  return (
    <>
      <Navbar />
       <div >
           <div className="mx-5 mt-5 flex gap-2 flex-col justify-center pt-14 lg:grid lg:grid-cols-[70%,30%]">
             {show &&(
                 <>
                   <div className="flex flex-col gap-10 justify-center items-center  w-full">
                      <ShowVideo shows={show} ep={ep} season={season}/>
                        <div  className="flex flex-col  gap-5 w-full lg:h-screen">
                             <div className="grid lg:grid-cols-5 lg:gap-5 mt-5 grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
                                {seasons.map((seasonItems)=>(
                                   <button className={` px-4 py-3 text-center lg:text-base text-neutral-400 ${
                                        season === seasonItems.season_number ? 'bg-red-600 text-white' : 'bg-neutral-900'
                                         
                                      }`  }
                                     onClick={()=> {setSeason(seasonItems.season_number); setEp(1);} }
                                    
                                   >
                                     Season {seasonItems.season_number}
                                   </button>
                                ))}
                             </div>
                             <div className="grid mt-9 lg:grid-cols-7 lg:gap-5 mb-10 grid-cols-3 gap-4 md:grid-cols-4 md:gap-6 lg:pb-10 ">
                                {episodes.map((episode, index)=>(
                                   <button className={`px-6 py-2 text-center lg:text-base text-neutral-400 ${
                                    ep === index + 1 ? 'bg-red-600 text-white' : 'bg-neutral-800'
                                  }`}
                                     onClick={()=> setEp(index+1)}
                                   >
                                     {index + 1}
                                   </button>
                                ))}
                             </div>
                        </div>
                   </div>
                   <div className=" flex justify-center  bg-zinc-900 mt-5 pt-5 lg:mx-5 pb-5 mb-10 ">
                        <div className="flex flex-col  items-center gap-1">
                           <img className="lg:w-[235px] w-[200px]" src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}  />  
                           <div className="lg:mx-14 mx-8 flex flex-col justify-center gap-3 text-neutral-400">
                           <p className="text-2xl pt-3 font-semibold text-left text-neutral-200">{show.name}</p>
                           <p className="lg:text-sm mb-5  text-neutral-400">{show.overview}</p>
                           <p className="text-sm font-normal text-neutral-400">Original name: <span className="text-sm text-red-400">{show.original_name}</span></p>
                           <p className="text-sm font-normal text-neutral-400">Premiered: <span className="text-sm text-red-400">{show.first_air_date}</span></p>
                           <p className="text-sm font-normal text-neutral-400">Country: <span className="text-sm text-red-400">{show.origin_country}</span></p>
                           <p className="text-sm font-normal text-neutral-400">Popularity: <span className="text-sm text-red-400">{show.popularity}</span></p>
                           <p className="text-sm font-normal text-neutral-400">Votes: <span className="text-sm text-red-400">{show.vote_average}</span></p>
                           <p className="text-sm font-normal text-neutral-400">Count: <span className="text-sm text-red-400">{show.vote_count}</span></p>
                           </div>
                           <div>
                              
                           </div>
                        </div>
                   </div>
              
                </>
             )}
           </div>
           
       </div>
    </>
  );
}

export default ShowInfo;

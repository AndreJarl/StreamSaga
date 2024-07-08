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
           <div className="grid grid-cols-[70%,30%]">
             {show &&(
                 <>
                   <div className="flex flex-col justify-center items-center mx-4">
                      <ShowVideo shows={show} ep={ep} season={season}/>
                        <div  className="flex flex-col  gap-5 w-full">
                             <div className="grid grid-cols-4 gap-3 mt-5">
                                {seasons.map((seasonItems)=>(
                                   <button className={`bg-slate-600 px-6 py-3 text-center ${
                                        season === seasonItems.season_number ? 'bg-slate-800' : 'bg-slate-600'
                                      }`  }
                                     onClick={()=> {setSeason(seasonItems.season_number); setEp(1);} }
                                    
                                   >
                                     Season {seasonItems.season_number}
                                   </button>
                                ))}
                             </div>
                             <div className="grid grid-cols-8 gap-2 mb-10">
                                {episodes.map((episode, index)=>(
                                   <button className={`px-6 py-2 text-center ${
                                    ep === index + 1 ? 'bg-slate-800' : 'bg-slate-600'
                                  }`}
                                     onClick={()=> setEp(index+1)}
                                   >
                                     {index + 1}
                                   </button>
                                ))}
                             </div>
                        </div>
                   </div>
                   <div className="">
                      <p>hgfdgf</p>
                   </div>
              
                </>
             )}
           </div>
           
       </div>
    </>
  );
}

export default ShowInfo;

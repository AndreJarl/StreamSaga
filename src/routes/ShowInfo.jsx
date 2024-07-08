import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Navbar from "../components/Navbar";
import ShowVideo from "../components/ShowVideo";

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
     
      <div className="flex flex-col my-5 justify-center items-center gap-10">
    
        {show && (
          <>
          <ShowVideo shows={show} ep={ep} season={season} />
            <div className="grid grid-cols-10 gap-5">
            
              {seasons.map((seasonItem) => (
                <button
                  key={seasonItem.season_number}
                  className={`px-6 text-center ${
                    season === seasonItem.season_number ? 'bg-skyblue' : 'bg-slate-600'
                  }`}
                  onClick={() => {
                    setSeason(seasonItem.season_number);
                    setEp(1); // Reset episode to 1 when changing season
                  }}
                >
                  Season {seasonItem.season_number}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-10 gap-5 mt-5">
              {episodes.map((episode, index) => (
                <button
                  key={index}
                  className={`px-6 text-center ${
                    ep === index + 1 ? 'bg-skyblue' : 'bg-slate-600'
                  }`}
                  onClick={() => setEp(index + 1)}
                >
                  Episode {index + 1}
                </button>
              ))}
            </div>
            <div className="flex flex-row justify-center items-center mt-10 gap-10">
        
              <div className="flex flex-col justify-center items-center">
                <img
                  src={`https://image.tmdb.org/t/p/w200${show.poster_path}`}
                  alt={show.name}
                />
                <div className="flex flex-col justify-center gap-6">
                  <p className="text-2xl font-bold">{show.name}</p>
                  <p className="w-[600px]">{show.overview}</p>
                  <p>{show.original_language}</p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default ShowInfo;

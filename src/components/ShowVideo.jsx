import { useEffect } from "react";
import { useParams } from "react-router"

function ShowVideo({shows, ep, season}){

    console.log(shows.id);
    console.log(ep);
      

    return(
        <>
        <div className="flex flex-col justify-center w-full mt-5">
          
        <iframe src={`https://autoembed.co/tv/tmdb/${shows.id}-${season}-${ep}`}
         height="500px"
         style={{ overflow: 'hidden' }}
         scrolling="no"
         frameborder="0" 
         allow="fullscreen"
          allowfullscreen></iframe>
            <p className=" text-left text-xl mt-4 font-bold">{shows.name} (Season {season}, Episode {ep})</p>
          </div>
        </>
    )
}

export default ShowVideo
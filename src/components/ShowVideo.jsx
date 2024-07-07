import { useEffect } from "react";
import { useParams } from "react-router"

function ShowVideo({shows, ep, season}){

    console.log(shows.id);
    console.log(ep);


    return(
        <>
        <div className="flex flex-col justify-center items-center">
            <p>{shows.name} season {season}, ep {ep}</p>
        <iframe src={`https://autoembed.co/tv/tmdb/${shows.id}-${season}-${ep}`}
         width="600px" 
         height="400px" 
         style={{ overflow: 'hidden' }}
         frameborder="0" 
         allow="fullscreen"
          allowfullscreen></iframe>
          </div>
        </>
    )
}

export default ShowVideo
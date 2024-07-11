import { Link } from "react-router-dom"

function ShowCard({shows: {id, poster_path, name}}){

    return(
        <>
        <Link to = {`/showInfo/${id}`}> 
        <div key={id} className="flex items-center justify-center">  
            <img className="w-[200px]" src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={name}  />   

        </div>
        </Link>
        </>
    )
}

export default ShowCard
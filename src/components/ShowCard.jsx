import { Link } from "react-router-dom"

function ShowCard({shows: {id, poster_path, name}}){

    return(
        <>
        <Link to = {`/showInfo/${id}`}> 
        <div key={id}>  
            <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={name}  />   

        </div>
        </Link>
        </>
    )
}

export default ShowCard
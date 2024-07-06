
function ShowCard({shows: {id, poster_path, name}}){

    return(
        <>
        <div key={id}>  
            <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={name}  />   

        </div>
        </>
    )
}

export default ShowCard
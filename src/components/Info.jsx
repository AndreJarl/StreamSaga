
function Info({shows}){
    return(
        <>
           <div>
              <p>{shows.name}</p>
              <img src={`https://image.tmdb.org/t/p/w300${shows.poster_path}`} alt={name}  />   

           </div>
        </>
    )
}

export default Info

function ShowCard({shows}){

    return(
        <>
        <div key={shows.id}>  
<img 
        src={`https://image.tmdb.org/t/p/w300${shows.poster_path}`} 
        alt={shows.name} 
      />   

</div>
        </>
    )
}

export default ShowCard
import './MovieCards.css'

function MovieCards({movies}){
    function onclickfav(){
        alert("clicked")
    }
    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`} alt={movies.title} />
                <button className="fav-btn" onClick={onclickfav}>❤</button>
            </div>
            <div className="movie-info">
                <h3>{movies.title}</h3>
                {/* Show full date or just the year */}
                <p>{movies.release_date ? movies.release_date : "No date"}</p>
                {/* Or just the year: */}
                {/* <p>{movies.release_date ? movies.release_date.split('-')[0] : "No date"}</p> */}
            </div>
        </div>
    );
}
export default MovieCards
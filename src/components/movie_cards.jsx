function MovieCards({movies}){
    function onclickfav(){
        alert("clicked")
    }
    return <div className="movie-card">
        <div className="movie-poster">
            <img src={movies.url} alt={movies.title} />
            <button className="fav-btn" onClick={onclickfav}>
                ❤
            </button>
        </div>
        <div className="movie-info">
            <h3>{movies.title}</h3>
            <p>{movies.date}</p>
        </div>
    </div>
}
export default MovieCards
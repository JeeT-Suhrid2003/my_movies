import MovieCards from "../components/movie_cards"
import {useState} from "react"
function Home() {
    const [searchQuery,setSearchQuery] = useState("");
    const movies =
        [
            { id: 1, title: "Movie 1", date: "2023", url: "https://example.com/movie1.jpg" },
            { id: 2, title: "Movie 2", date: "2020", url: "https://example.com/movie2.jpg" },
            { id: 3, title: "Movie 3", date: "2019", url: "https://example.com/movie3.jpg" },
            { id: 4, title: "Movie 4", date: "2003", url: "https://example.com/movie4.jpg" }
        ]

        const handleSearch = (e) => {
            e.preventDefault()
            alert(searchQuery)
            setSearchQuery("-------")
        };
    return <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input type="text" placeholder="search for the mocvies ..." className="search-input" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}/>
            <button type="submit" className="search-button">search</button>
        </form>



        <div className="movies-grid">
            {movies.map(
                (movie) => 
                movie.title.toLowerCase().startsWith(searchQuery) && 
                <MovieCards movies={movie} key={movie.id} />
                )}
        </div>
    </div>
}
export default Home
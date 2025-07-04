import './Home.css'
import MovieCards from "../components/movie_cards"
import {useState, useEffect} from "react"
import { searchmovies, getpopularmovies } from "../services/api";
function Home() {
    const [searchQuery,setSearchQuery] = useState("");
    const [error,setError] = useState(null);
    const [loading,SetLoading]= useState(true);

    const [movies ,setMovies] =useState([]);
    useEffect(() => {
        const loadpopularmovies = async ()=>{
            try{
                const popularmovies = await getpopularmovies()
                setMovies(popularmovies)
            }   catch (err) {
                console.log(err)
                setError("failed to load movies")
            }
            finally{SetLoading(false)}
        }
        loadpopularmovies()
    },[])


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


const API_KEY = "00b0287e01677b0d03eed86e9c785592"; // this is not my api i fount this in another git repo since i was not able to login!!! ~_~
const BASE_URL = 'https://api.themoviedb.org/3';

export const getpopularmovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data =await response.json()
    return data.results
};

export const searchmovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&qyery=${encodeURIComponent(query)}`);
    const data =await response.json()
    return data.results
};
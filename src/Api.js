const API_KEY=process.env.REACT_APP_API_KEY;
const API_URL="https://api.themoviedb.org/3/";

const fetchMovies = async (endpoint) => {
    return await fetch(
        `${API_URL}${endpoint}?language=fr-FR&api_key=${API_KEY}`
    ).then((response) => response.json())
}

async function getMovies() {
     return [
        {
            slug:"top-rated",
            title:"Mieux notés",
            items: await fetchMovies('movie/top_rated')
        },
        {
            slug:"popular",
            title:"Populaires",
            items: await fetchMovies('movie/popular')
        },
        {
            slug:"upcoming",
            title:"A venir",
            items: await fetchMovies('movie/upcoming')
        },
        {
            slug:"tv popular",
            title:"Séries populaires",
            items: await fetchMovies('tv/popular')
        },
     ]
}

// async function getMovies() {
//     return await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=426e3a234759aa99fcff1851d834d857&language=fr-FR&page=1')
//     .then((response) => response.json())
// }

export default getMovies;

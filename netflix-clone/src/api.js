const API_KEY = "3c9b120911da6b501340ac387c395a7d";

const Categories = [
    {
        name: "trending",
        title: "Em alta",
        path: `/treding/all/week?api_key=${API_KEY}&language=pt-BR`,
    },
    {
        name: "netflixOriginals",
        title: "Originais Netflix",
        path: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    },
    {
        name: "topRated",
        title: "Populares",
        path: `/movie/top_rated?api_key=${API_KEY}&language=pt-BR`,
    },
    {
        name: "comedy",
        title: "Comédias",
        path: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
    },
    {
        name: "romances",
        title: "Romances",
        path: `/discover/tv?api_key=${API_KEY}&with_genres=1074`,
    },
    {
        name: "documentaries",
        title: "Documentário",
        path: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
    },
]

export const getMovies = async (path) => {  
    try{   
        let url = `https://api.themoviedb.org/3/${path}`;
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.log("error getMovies: ", error);
    }
}
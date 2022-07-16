import React, { useEffect } from "react";
import categories, { getMovies } from "../api";
import "./Banner.css";

function Banner() {
    const [movies, setMovie] = React.useState({});

    const fetchRandomMovies = async () => {
        try {
            const netflixOriginalsCategory = categories.find(
                (category) => category.name === "netflixOriginals"
            );
            const data = await getMovies(netflixOriginalsCategory.path);
            const movies = data?.results; 
            const randomIndex = Math.floor(Math.random() * movies.lenght);
            setMovie(movies[randomIndex]);      
        } catch (error) {
        console.log("Banner fetchRandomMovie error: ", error);
        }
} ;

useEffect(() => {
    fetchRandomMovies();
}, []);

  return (
    <header 
    className="banner-container" 
    style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
        roundPosition: "center-center",
    }}
    >
        
    </header>
  );
    
}

export default Banner;
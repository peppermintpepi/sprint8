// Films.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FilmContainer, FilmPoster, FilmTitle } from "./FilmsStyles";

// Exercici 9 --> accedir a la informació de les pel·lícules
const Films = ({ films }) => {
  const [moviesData, setMoviesData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movieInfoPromises = films.map(async (filmUrl) => {
          try {
            const response = await axios.get(filmUrl);
            return response.data;
          } catch (error) {
            console.error("Error fetching movie data", error);
            return null;
          }
        });

        const moviesInfo = await Promise.all(movieInfoPromises);
        setMoviesData(moviesInfo);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching movies", error);
      }
    };

    fetchMovies();
  }, [films]);

    const getFilmId = (filmUrl) => {
        const id = filmUrl.split("/").filter(Boolean).slice(-1)[0];
        return id;
    };
  

    return (
        <FilmContainer>
          {moviesData.map((movie, index) => {
            if (movie) {
              return (
                <FilmPoster key={index}>
                  <img src={`https://starwars-visualguide.com/assets/img/films/${getFilmId(movie.url)}.jpg`} alt={movie.title} />
                  <FilmTitle>{movie.title}</FilmTitle>
                </FilmPoster>
              );
            }
            return null;
          })}
        </FilmContainer>
      );
    
};

export default Films;

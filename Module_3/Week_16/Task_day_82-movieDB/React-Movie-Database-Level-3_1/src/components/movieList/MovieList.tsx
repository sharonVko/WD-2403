import "./MovieList.css"
import movies, { TMovie } from '../../../data/movieData';

import Searchbar from "../searchbar/Searchbar";
import MovieCard from "../movieCard/MovieCard";
import { useEffect, useState } from "react";



const MovieList = () => {
    const [film, setFilm] = useState<TMovie[]>([]);
   
    /* hier useEffect, der ausgeführt wird, wenn sich das input verändert oder btn click , nur dann soll die funktion ausgeführt werden */

    useEffect(() => {
        console.log(movies);
        
        setFilm(movies)
    }, []);

    //sort by data asc
    //sort by data desc

    
    //sort by best rate
    const sortByBestRate = () => {
        const sortedMovies = [...film].sort((a,b) => parseFloat(b.rate) - parseFloat(a.rate));
        setFilm(sortedMovies)
    }

    //sort by title A-Z asc
    const sortByTitleAsc = () => {
        const sortedMovies = [...film].sort((a,b) => a.title < b.title? 1: -1);
        setFilm(sortedMovies);
    };
    //sort by title Z-A desc
    const sortByTitleDesc = () => {
        const sortedMovies = [...film].sort((a,b) => b.title < a.title? 1: -1);
        setFilm(sortedMovies);
    }

    return ( 
        <>
            <h2>Check out our movies</h2>
            <Searchbar sortByTitleAsc={sortByTitleAsc} sortByTitleDesc={sortByTitleDesc} sortByBestRate={sortByBestRate}/>
            <section className="movie-list">
            {film.map((movie, index) => ( //bevor useState für btns -movies.map zum abrufen genutzt
                <MovieCard key={index} movie={movie}/>
            ))}
           {/*  <p>fetch,state,map  hier</p> */}
            </section>
        </>
     );
}
 
export default MovieList;
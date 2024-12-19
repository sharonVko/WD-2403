import "./MovieCard.css"
import { TMovie } from '../../../data/movieData';
import { Link } from "react-router-dom";

interface IMovieCardProps{
    movie: TMovie
}


const MovieCard:React.FC<IMovieCardProps> = ({movie}) => {
    return ( 
        <Link to={`detailView/:${movie.title}`}>
        <article className="card-style">
           <h3>{movie.title}</h3> 
            <p>{movie.year}</p>
            <p>{movie.director}</p>
            <p>{movie.rate}</p>

        </article>
        </Link>
     );
}
 
export default MovieCard;
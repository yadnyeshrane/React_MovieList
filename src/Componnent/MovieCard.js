import React from 'react';
import MoviesControl from './MoviesControl'
const MovieCard = ({movie,type}) => {
  return (
    <div className="movie-card">
<div className="overlay"></div>
{
  movie.poster_path?(
    <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`${movie.title}Poster`} />
  ):(<div className="filter-poster"></div>)
}
<MoviesControl movie={movie} type={type}>

</MoviesControl>
    </div>
  );
}



export default MovieCard;
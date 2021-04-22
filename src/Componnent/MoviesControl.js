import React,{useContext} from 'react';
import{GlobalContext} from '../Context/GlobalState'
const MoviesControl = ({movie,type}) => {
  const{removemovie,watchedMovie,backtoWatch,removeWatched}=useContext(GlobalContext);
  return(
    <div className="inner-card-controls">
    {
      type==="watchlist"&&(
        <>
        <i className="fa fa-eye ctrl-btn" aria-hidden="true" onClick={()=>watchedMovie(movie)}></i>
        <i className="fa fa-archive ctrl-btn" aria-hidden="true" onClick={()=>removemovie(movie.id)}></i>

        </>
      )
    }
    {
      type==="watched"&&(
        <>
        <i className="fa fa-long-arrow-left ctrl-btn" aria-hidden="true" onClick={()=>{
          backtoWatch(movie)
        }}></i>
        <i className="fa fa-archive ctrl-btn" aria-hidden="true"  onClick={()=>{removeWatched(movie.id)}}></i>
        </>
      )
    }
    </div>
  );
}

export default MoviesControl;
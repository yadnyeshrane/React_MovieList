import React,{useContext} from 'react';
import {GlobalContext} from '../Context/GlobalState'
const ResultCard = ({movie}) => {
  const{watched,watchlist,addMovie}=useContext(GlobalContext)

  let storedMovie=watchlist.find((o)=>o.id===movie.id)

  let storedWatched=watched.find((o)=>o.id===movie.id)

  const watchtoogs=storedMovie?true:storedWatched?true:false
  return (
    <div className="result-card">
    <div className="poster-wrapper">
    {movie.poster_path?(<img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`${movie.title}Poster`}/>):(<div className="filter-poster"></div>)
    }
    <div className="info">
<div className="header">
<h3 className="title">{movie.title}</h3>
<h4 className="release-date">{movie.release_date.substring(0,4)}</h4>
</div>
<div className="controls">
  <button className="btn" onClick={()=>addMovie(movie)} disabled={watchtoogs}>Add To Watchlist</button>
  </div>
    </div>
    </div>
    </div>
  )
}


export default ResultCard;
import React,{createContext,useReducer,useEffect} 
from 'react';
import AppReducer from './AppReducer'
//intail state

const intialSatte={
  watchlist:localStorage.getItem('watchlist')?JSON.parse(localStorage.getItem('watchlist')):[],
  watched:localStorage.getItem('watched')?JSON.parse(localStorage.getItem('watched')):[],
};

//create context
export const GlobalContext=createContext(intialSatte);
//provider

export const GlobalProvider=props=>{
  const [state,dispatch]=useReducer(AppReducer,intialSatte)

  useEffect(()=>{
    localStorage.setItem('watchlist',JSON.stringify(state.watchlist))

    localStorage.setItem('watched',JSON.stringify(state.watched))
  },[state])

  //actions
  const addMovie=movie=>{
    dispatch({type:'AddMovie',payload:movie})
    
  }
  const removemovie=id=>{
    dispatch({type:'Remove',payload:id})
  }
  const watchedMovie=movie=>{
    dispatch({type:'Watched',payload:movie})
  }
  const backtoWatch=movie=>{
    dispatch({type:'Movedtowatch',payload:movie})
  }

  const removeWatched=id=>{
    dispatch({type:'RemoveWatched',payload:id})
  }

    return (
    <GlobalContext.Provider value={{watchlist:state.watchlist,watched:state.watched,addMovie,removemovie,watchedMovie,backtoWatch,removeWatched}}>
      {props.children}
    </GlobalContext.Provider>
  )
}

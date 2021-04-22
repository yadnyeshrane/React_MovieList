import Watched from "../Componnent/Watched"

export default(state,action)=>
{
  switch(action.type)
  {
    case 'AddMovie':
      return{
        ...state,
        watchlist:[action.payload,...state.watchlist]
      }
      case "Remove":
      return{
  ...state,
  watchlist:state.watchlist.filter((movie)=>movie.id!=action.payload)
      }

      case 'Watched':
        return{
          ...state,
          watchlist:state.watchlist.filter((movie)=>movie.id!=action.payload.id),
          watched:[action.payload,...state.watched]
        }

        case 'Movedtowatch':
          return{
            ...state,
            watched:state.watched.filter((movie)=>movie.id!=action.payload.id),
            watchlist:[action.payload,...state.watchlist]
          }
          case 'RemoveWatched':
            return{
              ...state,
              watched:state.watched.filter((movie)=>movie.id!=action.payload)
            }
      default:
        return state 
  }
}
import React ,{useState}from 'react';
import ResultCard from './ResultCard'
const Api_key='2ad525e8b294ac4b9bae3dda4a1faeb8';

const Add = () => {
  const [query,setQuery]=useState('');
  const[result,setresult]=useState([]);

  const onChanged=(e)=>{
   setQuery(e.target.value) 
   fetch(`https://api.themoviedb.org/3/search/movie?api_key=2ad525e8b294ac4b9bae3dda4a1faeb8&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
 .then((res)=>{
   res.json()
   .then((data)=>{
     if(!data.errors)
     {
       console.log(data.results)
        setresult(data.results)
     }
     else
     {
       setresult([])
     }
   })
 })
 .catch((err)=>{
   console.log(err)
 })
  }
  return (
   <div className='add-page'>
<div className="container">
<div className="add-content">
  <div className="input-wrapper">
  <input type="text" placeholder="search for movie" value={query} onChange={onChanged}>
  </input>
  </div>
  {
    result.length > 0 &&(
    <ul className="results">
      {
         result.map((movie)=>(
           <li key={movie.id}>
             <ResultCard movie={movie}></ResultCard>
           </li>
         ))
      }
    </ul>
    )
    
  }

</div>
</div>
   </div> 
  )
}



export default Add;
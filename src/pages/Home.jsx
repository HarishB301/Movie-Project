import { useState } from "react"
import MovieCard from "../components/MovieCard";

const Home = () => {
  const [searchQuery,setsearchQuery] = useState("");

  const movies=[
    {id:1, title:"john wick", release_date:"2020"},
    {id:2, title:"Avatar", release_date:"2009"},
    {id:3, title:"Transformers", release_date:"2023"},
  ];

  const handleSearch=(e)=>{
      e.preventDefault();
      alert(searchQuery);
      setsearchQuery("");
  }
  
  return (
    <div className="home">
      <form action="" onSubmit={handleSearch} className="search-form">
        <input type="text" placeholder="seach for movies.."
         className="search-input"
          value={searchQuery} onChange={(e)=> setsearchQuery(e.target.value)}/>

          <button className="submit" type="submit">search</button>

      </form>
       <div className="movies-grid">
        {
          movies.map((movie)=>movie.title.toLowerCase().startsWith(searchQuery)&&(
            <MovieCard movie={movie} key={movie.id}></MovieCard>
          ))
        }
       </div>
    </div>
  )
}

export default Home

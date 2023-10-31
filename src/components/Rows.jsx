import React, { useEffect, useState } from 'react'
import instance1 from '../instance1';
import './Row.css'



function Rows({title, fetchUrl,isPoster}){
    console.log(fetchUrl);
    const [allMovie , setAllMovies] = useState()
    const base_url = "https://image.tmdb.org/t/p/original/";


    const fetchData = async ()=>{
    const {data} =  await instance1.get(fetchUrl)
    setAllMovies(data.results);

    }
    console.log(allMovie);

    useEffect(()=>{
      fetchData()
    },[])

    return (
    <div className='row'>
        <h1>{title}</h1>
        <div className="movie-row">
          {
            allMovie?.map(item=>(
              <img  className={`movie ${isPoster && 'movie-poster'}`} src={`${base_url}${isPoster?item.poster_path:item.backdrop_path}`} alt="no image" />
            ))
          }

        </div>
    </div>

  )
}

export default Rows

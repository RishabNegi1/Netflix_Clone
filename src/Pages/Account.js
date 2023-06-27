import React, { useEffect, useState } from 'react';
import requests from "../Request";
import axios from 'axios';
import SavedShows from '../Component/SavedShows';

const Account = () => {
  const[movies, setMovies] = useState([]);

    const movie = movies[Math.floor(Math.random()* movies.length)]
    useEffect(()=>{
        axios.get(requests.requestPopular).then((response)=>{
            setMovies(response.data.results)
        })
    },[])

    const truncateString = (str, num) =>{
      if(str?.length>num){
        return str.slice(0,num) + '....'
      }
      else {
        return str;
      }
    }
  return (
    <div className=' h-[95vh] w-full'>
        <div className=' absolute w-full h-[90vh] bg-gradient-to-r from-black'></div>
        <img
         className='object-cover w-screen h-[90vh] ' 
         src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
         alt={movie?.title}/>

         <div className=' absolute w-full top-[40%] p-4 md:p-8'>
          <h1 className=' text-slate-100 text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold'>{movie?.title}</h1>
         <div className=' my-6'>
         <button className=' border bg-gray-300 border-gray-300 py-2 px-5 text-black'>Play</button>
         <button className=' border border-gray-300 py-2 px-5 text-white ml-4'>Watch Later</button>
         </div>
         <p className=' text-gray-400 text-base md:text-lg lg:text-xl my-6'>Released: {movie?.release_date}</p>
         <p className=' w-full md:max-w-[60%] lg:max-w-[50%] xl:max-w-[30%] text-gray-300 text-sm md:text-base lg:text-lg my-6'>
          {truncateString(movie?.overview, 150)}
          </p>
         </div>

         <SavedShows/>
      </div>
  )
}

export default Account
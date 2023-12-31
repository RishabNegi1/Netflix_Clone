import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {AiOutlineDoubleLeft, AiOutlineDoubleRight} from 'react-icons/ai';
import Movies from './Movies';

const Row = ({ Id, title, fetchURL}) => {
    const [movies, setMovies] =useState([]);
    

    useEffect(()=>{
        axios.get(fetchURL).then((response)=>{
            setMovies(response.data.results)
        })
    },[fetchURL]);

    const slideLeft = ()=>{
        var slider = document.getElementById('slider' + Id)
        slider.scrollLeft = slider.scrollLeft - 500;
    }
    const slideRight = ()=>{
        var slider = document.getElementById('slider' +Id)
        slider.scrollLeft = slider.scrollLeft + 500;
    }

  return (
    <div>
        <h2 className=' text-gray-200 font-bold text-base md:text-xl p-4'>{title}</h2>
        <div className=' relative flex items-center group'>
        <AiOutlineDoubleRight 
            onClick={slideRight}
            size={30} 
            className=' text-cyan-100 bg-black left-0 rounded-xl absolute opacity-80 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'/>
            <div id={'slider' + Id}
             className=' w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                {movies.map((item, id)=>(
                    <Movies item={item}/>
                ))}
            </div>
            <AiOutlineDoubleLeft 
            onClick={slideLeft}
            size={30} 
            className=' text-cyan-100 bg-black right-0 rounded-xl absolute opacity-80 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'/>
        </div>
    </div>
  )
}

export default Row
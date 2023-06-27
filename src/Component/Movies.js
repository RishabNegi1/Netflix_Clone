import React ,{useState} from 'react';
import {MdAddBox, MdLibraryAddCheck} from 'react-icons/md';
import { db } from '../firebase';
import { UserAuth } from '../Context/AuthContext';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';

const Movies = ({item}) => {
    const [add, setAdd] = useState(false);
    const [saved, setSaved] = useState(false);
    const {user} = UserAuth(); 

    const movieId = doc(db, 'users',`${user?.email}`)
    const saveShow = async()=>{
      if(user?.email){
        setAdd(!add)
        setSaved(true)
        await updateDoc(movieId,{
          saveShows: arrayUnion({
            id: item.id,
            title: item.title,
            img: item.backdrop_path
          })
        })
      }
      else{
        alert('Please log in to save a movie');
      }
    }

    const truncateString = (str, num) =>{
        if(str?.length>num){
          return str.slice(0,num) + '....'
        }
        else {
          return str;
        }
      }

  return (
    <div className=' w-[200px] sm:w-[240px] md:w-[280px] lg:w-[320px] inline-block cursor-pointer relative p-2'>
          <img
             className=' w-full h-auto block'
          src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
          alt={item?.title}/>
          <div className=' absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-60 text-white'>
            <p className=' px-3 py-2 text-xs md:text-base '>
                {truncateString(item?.title, 30)}
            </p>
            <p onClick={saveShow}>
                {add?<MdLibraryAddCheck 
                  className=' absolute text-gray:300 right-4 text-2xl bottom-4 ' /> 
                : 
                <MdAddBox
                 className=' absolute text-gray:300 right-4 text-2xl bottom-4' />}
            </p>
          </div>
    </div>
  )
}

export default Movies
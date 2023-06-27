import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../Context/AuthContext';
import {IoPersonOutline} from 'react-icons/io5';

const Navbar = () => {
  const {user, logOut} = UserAuth()
  console.log(user)
  const navigate = useNavigate();

  const handleLogout = async ()=>{
    try{
      await logOut();
      navigate('/login');
    }catch(error)
    {
      console.log(error);
    }
  }
  return (
    <div className=' flex items-center justify-between p-4 absolute z-[100] w-full'>
      <Link to='/'>
      <h1 className=' text-red-600 text-4xl font-bold text-'>NETFLIX</h1>
      </Link>
      {user?.email?
      <div className=' flex flex-row'>
      <Link to={'/account'}>
      <button 
      className=' pr-4 pt-3 text-3xl md:text-4xl lg:text-4xl xl:text-4xl text-teal-500 '>
        <IoPersonOutline/>
      </button>
      </Link>
      <div>
      <button 
      onClick={handleLogout}
      className=' text-xs md:text-base lg:text-base xl:text-lg cursor-pointer text-zinc-100 bg-red-500 px-3 py-1 my-4 rounded'>LogOut</button>
    </div>
    </div>
    :
      <div>
      <Link to='/login'>
      <button className=' text-xs md:text-base lg:text-base xl:text-lg cursor-pointer text-zinc-100 bg-red-500 px-4 py-2 my-4 rounded'>Sign In</button>
      </Link>
    </div>
    }
    </div>
  )
}

export default Navbar
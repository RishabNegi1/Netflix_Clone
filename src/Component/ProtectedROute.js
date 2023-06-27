import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../Context/AuthContext';

const ProtectedROute = ({children}) => {
    const {user} = UserAuth();
    if(!user){
        return <Navigate to='/'/>
    }
    else{
        return children
    }
  return (
    <div></div>
  )
}

export default ProtectedROute
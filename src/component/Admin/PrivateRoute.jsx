import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoute = () => {
   const data =  localStorage.getItem('user')
  return data ? <Outlet /> : <Navigate to='/' replace />
}

export default PrivateRoute
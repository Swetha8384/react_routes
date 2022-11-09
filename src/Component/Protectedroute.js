import React from 'react'
import { Outlet,Navigate } from 'react-router-dom'
//import Dashboard from './Dashboard'
import {dashboard} from './Login'
const Protectedroute = () => {
    const login = dashboard()
  return (
     login? <Outlet/>:<Navigate to='/home'/>
  )
}

export default Protectedroute;

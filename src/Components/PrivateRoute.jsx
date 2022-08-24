import React, { useContext } from 'react'
// import { AppContext } from '../Context/AppContext'
import {Navigate} from "react-router-dom"
import { AppContext } from '../ContextApi/AppContext'

const PrivateRoute = ({children}) => {
    const state=useContext(AppContext)
  if(!state.authState.isAuth){
    return <Navigate to="/login"/>
  }
  else{
    return children;
  }
}

export default PrivateRoute
import React from 'react'
import {Routes,Route} from "react-router-dom"
import FindYourWay from './FindYourWay'
import Home from './Home'
import Login from './Login'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/findyourwayabudhabi' element={<FindYourWay/>}></Route>
      </Routes>
    </div>
  )
}

export default AllRoutes
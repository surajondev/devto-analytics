import React from 'react'
import Header from '../components/Header'
import {Login} from '../components/Login'

const login = () => {
  return (
    <div className="container">
        <div className="leftContainer">
            <Header />
        </div>
        <div className="rightContainer">
            <Login />
        </div>
    </div>
  )
}

export default  login
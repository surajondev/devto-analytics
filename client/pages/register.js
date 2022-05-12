import React from 'react'
import Header from '../components/Header'
import { Register } from '../components/Register'

const register = () => {
  return (
    <div className="container">
        <div className="leftContainer">
            <Header />
        </div>
        <div className="rightContainer">
            <Register />
        </div>
    </div>
  )
}

export default register
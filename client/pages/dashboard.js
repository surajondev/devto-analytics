import React from 'react'
import Header from '../components/Header'
import { Dashboard } from '../components/Dashboard'

const dashboard = () => {
  return (
    <div className="container">
        <div className="leftContainer">
            <Header />
        </div>
        <div className="rightContainer">
            <Dashboard />
        </div>
    </div>
  )
}

export default dashboard
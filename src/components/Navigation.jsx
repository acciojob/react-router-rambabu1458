import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
        <h1>Navigation</h1>
        <nav>
            <ul>
            <li><Link to="/">Home</Link></li>
             <li><Link to="/about">About</Link></li>
        </ul>
        </nav>
    </div>
  )
}

export default Navigation
import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* You can add Image of Logo here or text will also work */}
      <p className="logo">GOBLAQ</p>
      <button className="join" type="submit">Join our waitlist</button>
    </nav>
  )
}

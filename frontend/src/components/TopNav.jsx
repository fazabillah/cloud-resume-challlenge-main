import { useState } from 'react'
import { NavLink } from 'react-router-dom'

function TopNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <nav id="topNav">
      <div className="brand">
        Faza <span>Billah</span>
      </div>
      <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`} id="topNavLinks">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => isActive ? 'active' : ''}
            onClick={closeMenu}
          >
            Resume
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) => isActive ? 'active' : ''}
            onClick={closeMenu}
          >
            Project
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blog"
            className={({ isActive }) => isActive ? 'active' : ''}
            onClick={closeMenu}
          >
            Blog
          </NavLink>
        </li>
      </ul>
      <button
        className="hamburger"
        id="hamburger"
        onClick={toggleMenu}
        aria-label="Toggle navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  )
}

export default TopNav

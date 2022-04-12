import React from 'react'
import { NavLink } from 'react-router-dom'

// Asset
import Pokeball from '../assets/img/pokeball.png'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
        <div className="container-fluid g-0">
          <img className="pokeball-icon" src={Pokeball} alt="" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav d-flex justify-content-center">
              <NavLink className="nav-link fw-bold" to="/">
                Pokemon List
              </NavLink>
              <NavLink className="nav-link fw-bold" to="/mypokemon">
                My Pokemon
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
      {children}
    </>
  )
}

export default Layout

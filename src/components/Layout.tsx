import React from 'react'
import Pokeball from '../assets/img/pokeball.png'

const Layout = () => {
  return (
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
            <a className="nav-link active" aria-current="page" href="#">
              Pokemon List
            </a>
            <a className="nav-link" href="#">
              My Pokemon
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Layout

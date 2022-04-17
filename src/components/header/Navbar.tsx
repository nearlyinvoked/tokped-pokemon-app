import { NavLink } from 'react-router-dom'

import Pokeball from '../../assets/img/pokeball.png'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
      <div className="container-fluid g-0">
        <div className="logo">
          <img className="pokeball-icon" src={Pokeball} alt="" />
        </div>
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
          <Pages />
        </div>
      </div>
    </nav>
  )
}

const Pages = () => {
  return (
    <div className="navbar-nav d-flex justify-content-center">
      <NavLink className="nav-link fw-bold" to="/" data-testid="link1">
        Pokemon List
      </NavLink>
      <NavLink className="nav-link fw-bold" to="/mypokemon" data-testid="link2">
        My Pokemon
      </NavLink>
    </div>
  )
}

export default Navbar

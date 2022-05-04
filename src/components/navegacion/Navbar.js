import React from 'react'
import {Link} from 'react-router-dom'
import CartWidget from '../CartWidget';

const navbar = () => {
  return (
    <div>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <Link className="nav-link" to= '/'>Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to= '/inicio'>Inicio</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to= '/item'>Item</Link>
        </li>
       <li className="myCard">
          <CartWidget/>
         </li>
       </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default navbar
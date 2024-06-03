import React from 'react';
import { NavLink } from 'react-router-dom';
import categories from "../../data/categorias.json";
import '../../css/main.css'

export const NavBar = () => {

  return (
    <nav className="nav justify-content-center">
        <ul className="nav-menu list-unstyled d-flex mb-0">
            <li className="nav-item">
              <NavLink to="/" activeclassname="active" className="nav-link nav-text-custom">Inicio</NavLink>
            </li>
            {
              categories.map((category) => {
                  return (
                    <li className="nav-item" key={category.id}>
                      <NavLink to={`/category/${category.id}`} activeclassname="active" className="nav-link nav-text-custom">
                        {category.nombre}
                      </NavLink>
                    </li>
                  )
              })
            }
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link nav-text-custom">Contacto</NavLink>
            </li>     
        </ul>
    </nav>
  )
}

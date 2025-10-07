import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <NavLink to="/page1">Sobre mí</NavLink>
        </li>
        <li>
          <NavLink to="/page2">Servicios</NavLink>
        </li>
        <li>
          <NavLink to="/page3">Contacto</NavLink>
        </li>
      </ul>
    </nav>
  );
}

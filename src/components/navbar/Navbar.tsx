import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <NavLink to="/music">Music</NavLink>
        </li>
        <li>
          <NavLink to="/sfx">Sounds</NavLink>
        </li>
        <li>
          <NavLink to="/urls">URL Vault</NavLink>
        </li>
      </ul>
    </nav>
  );
}

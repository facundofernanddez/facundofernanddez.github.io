import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <ul className="nav nav-pills nav-fill bg-light my-4 rounded">
        <li className="nav-item">
          <NavLink className="nav-link m-2 link-dark" to="/">
            <i className="bi bi-house fs-2" />
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link m-2 link-dark" to="/aboutme">
            <i className="bi bi-info-square fs-2" />
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link m-2 link-dark" to="/projects">
            <i className="bi bi-code-square fs-2"></i>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link m-2 link-dark" to="/contact">
            <i className="bi bi-envelope fs-2"></i>
          </NavLink>
        </li>
        <li className="nav-item">
          <a
            className="nav-link m-2 link-dark"
            href="https://github.com/facundofernanddez"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-github fs-2" />
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link m-2 link-dark"
            href="https://www.linkedin.com/in/facundofernanddez/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-linkedin fs-2" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

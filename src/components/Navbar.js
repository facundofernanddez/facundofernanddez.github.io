import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <ul className="nav nav-tabs nav-fill bg-dark">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/aboutme">
            About me
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/projects">
            Projects
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Github
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Linkedin
          </Link>
        </li>
      </ul>
    </nav>
  );
};

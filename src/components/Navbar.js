import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              About me
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Proyects
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
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
      </div>
    </nav>
  );
};

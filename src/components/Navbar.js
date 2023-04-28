import { Link, NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { OverlayTrigger } from "react-bootstrap";
import { Tooltip } from "react-bootstrap";

export const Navbar = () => {
  const navIcons = [
    {
      name: "Home",
      className: "bi bi-house fs-2",
      link: "/",
    },
    {
      name: "About Me",
      className: "bi bi-info-square fs-2",
      link: "./aboutme",
    },
    {
      name: "Projects",
      className: "bi bi-code-square fs-2",
      link: "./projects",
    },
    {
      name: "Contact",
      className: "bi bi-envelope fs-2",
      link: "./contact",
    },
    {
      name: "GitHub",
      className: "bi bi-github fs-2",
      link: "https://github.com/facundofernanddez",
    },
    {
      name: "Linkedin",
      className: "bi bi-linkedin fs-2",
      link: "https://www.linkedin.com/in/facundofernanddez/",
    },
  ];

  return (
    <>
      <Nav fill variant="pills" className="bg-light my-4 rounded p-2">
        {navIcons.map((item, index) => {
          return (
            <OverlayTrigger
              key={index}
              placement="bottom"
              overlay={
                <Tooltip key={index}>
                  <strong>{item.name}</strong>
                </Tooltip>
              }
            >
              <Nav.Item>
                <NavLink className="nav-link m-2 link-dark" to={item.link}>
                  <i className={item.className} />
                </NavLink>
              </Nav.Item>
            </OverlayTrigger>
          );
        })}
      </Nav>
    </>
  );
};

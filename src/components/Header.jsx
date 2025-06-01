import { NavLink } from "react-router";

export default function Header() {
  return (
    <header className="bg-light border-bottom mb-4">
      <nav className="container navbar navbar-expand-lg navbar-light px-2">
        <NavLink className="navbar-brand fw-bold text-primary" to="/">
          About Me
        </NavLink>

        <div className="flex-grow-1 d-flex flex-nowrap" id="navbarNav">
          <ul className="navbar-nav gap-3 ms-auto d-flex flex-nowrap flex-row">
            <li className="nav-item">
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "bg-pink font-bold text-primary" : ""}`
                }
              >
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                end
                to="/contact"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "bg-pink font-bold text-primary" : ""}`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

import { Outlet, NavLink } from "react-router-dom";

import { Hero } from "../components";
import { Footer } from "../great-frontend-projects/Footer";

export const Layout = ({ showHero, showFooter }) => {
  return (
    <>
      {showHero && <Hero />}
      <nav className="nav-center">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : null)}
        >
          All Projects
        </NavLink>
        <NavLink
          to="/react-query"
          className={({ isActive }) => (isActive ? "active" : null)}
        >
          Larger Scale Projects
        </NavLink>
        <NavLink
          to="/react-hooks"
          className={({ isActive }) => (isActive ? "active" : null)}
        >
          React Hook Snippets
        </NavLink>
        <NavLink
          to="/great-frontend-projects/"
          className={({ isActive }) => (isActive ? "active" : null)}
        >
          GreatFrontEnd Projects
        </NavLink>
      </nav>
      <Outlet />
      {showFooter && <Footer />}
    </>
  );
};

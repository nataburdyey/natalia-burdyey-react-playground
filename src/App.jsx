import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Hero from "./Hero";
import Projects from "./Projects";
import ReactQueryProjects from "./ReactQueryProjects";
import ReactHookSnippets from "./ReactHookSnippets";
import GreatFrontEndProjects from "./GreatFrontEndProjects";

const App = () => {
  return (
    <Router>
      <main>
        <Hero />
        <nav className="nav-center">
          <NavLink to="/" className={({isActive}) => isActive ? 'active' : null}>
            All Projects
          </NavLink>
          <NavLink to="/great-frontend" className={({isActive}) => isActive ? 'active' : null}>
            GreatFrontEnd Projects
          </NavLink>
          <NavLink to="/react-query" className={({isActive}) => isActive ? 'active' : null}>
            React Query
          </NavLink>
          <NavLink to="/react-hooks" className={({isActive}) => isActive ? 'active' : null}>
            React Hooks
          </NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Projects />} />
          <Route path="/great-frontend" element={<GreatFrontEndProjects />} />
          <Route path="/react-query" element={<ReactQueryProjects />} />
          <Route path="/react-hooks" element={<ReactHookSnippets />} />
        </Routes>
      </main>
    </Router>
  );
};
export default App;

import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Hero from "./Hero";
import Projects from "./Projects";
import ReactQueryProjects from "./ReactQueryProjects";
import ReactHookSnippets from "./ReactHookSnippets";
import GreatFrontEndProjects from "./GreatFrontEndProjects";
import { ProfileCard } from "./great-frontend-projects/profile-card/ProfileCard";

const App = () => {
  return (
    <Router>
      <main>
        <Hero />
        <nav className="nav-center">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : null)}
          >
            All Projects
          </NavLink>
          <NavLink
            to="/great-frontend"
            className={({ isActive }) => (isActive ? "active" : null)}
          >
            GreatFrontEnd Challenges
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
        </nav>
        <Routes>
          <Route path="/" element={<Projects />} />
          <Route path="/great-frontend/" element={<GreatFrontEndProjects />} />
          <Route
            path="/great-frontend/profile-card"
            element={
              <ProfileCard
                name="Sarah Dole"
                title="Front End Engineer @ Microsoft"
                description="I turn coffe into bugs which are fixed by someone else. Sertified Stack Overflow and Chat GPT developer."
              />
            }
          />
          <Route path="/react-query" element={<ReactQueryProjects />} />
          <Route path="/react-hooks" element={<ReactHookSnippets />} />
        </Routes>
      </main>
    </Router>
  );
};
export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Layout,
  Projects,
  ReactQueryProjects,
  GreatFrontEndProjects,
  ReactHookSnippets,
} from "./components";
import { ProfileCard, ProgressBarTable } from "./great-frontend-projects";

const App = () => {
  return (
    <Router>
      <main>
        <Routes>
          {/* Main routes that use the Layout with Hero */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Projects />} />
            <Route path="/react-query" element={<ReactQueryProjects />} />
            <Route path="/react-hooks" element={<ReactHookSnippets />} />
            <Route path="/great-frontend/" element={<GreatFrontEndProjects />} />
          </Route>

          {/* Project routes without Hero */}
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
          <Route
            path="/great-frontend/progress-bar"
            element={<ProgressBarTable />}
          />
        </Routes>
      </main>
    </Router>
  );
};
export default App;

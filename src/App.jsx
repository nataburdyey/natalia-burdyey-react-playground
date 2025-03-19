import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Layout,
  Projects,
  ReactQueryProjects,
  GreatFrontEndProjects,
  ReactHookSnippets,
} from "./components";
import { ProfileCard, ProgressBarTable } from "./great-frontend-projects";

export const App = () => {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<Layout showHero />}>
            <Route index element={<Projects />} />
            <Route path="/react-query" element={<ReactQueryProjects />} />
            <Route path="/react-hooks" element={<ReactHookSnippets />} />
            <Route
              path="/great-frontend/"
              element={<GreatFrontEndProjects />}
            />
          </Route>
          {/* Nested routes for GreatFrontEnd Projects */}
          <Route path="/great-frontend/*" element={<Layout showFooter/>}>
            <Route
              path="profile-card"
              element={
                <ProfileCard
                  name="Sarah Dole"
                  title="Front End Engineer @ Microsoft"
                  description="I turn coffe into bugs which are fixed by someone else. Sertified Stack Overflow and Chat GPT developer."
                />
              }
            />
            <Route path="progress-bar" element={<ProgressBarTable />} />
          </Route>
        </Routes>
      </main>
    </Router>
  );
};

import LargeScaleProjects from './LargeScaleProjects';
import ReactHookSnippets from './ReactHookSnippets';
import ReactQueryProjects from './ReactQueryProjects';
import StateManagement from './StateManagement';

const Projects = () => {
  return (
    <>
      <LargeScaleProjects />
      <ReactQueryProjects />,
      <StateManagement />
      <ReactHookSnippets />,
    </>
  );
};
export default Projects;

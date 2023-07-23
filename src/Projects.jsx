import LargeScaleProjects from './LargeScaleProjects';
import ReactHookSnippets from './ReactHookSnippets';
import ReactQueryProjects from './ReactQueryProjects';
// import StateManagement from './StateManagement';

const Projects = () => {
  return (
    <>
      <LargeScaleProjects />
      {/* <StateManagement /> */}
      <ReactQueryProjects />,
      <ReactHookSnippets />,
    </>
  );
};
export default Projects;

import { GreatFrontEndProjects } from "./GreatFrontEndProjects";
import { ReactHookSnippets } from "./ReactHookSnippets";
import { ReactQueryProjects } from "./ReactQueryProjects";

export const Projects = () => {
  return (
    <>
      <ReactQueryProjects />
      <ReactHookSnippets />
      <GreatFrontEndProjects />
    </>
  );
};

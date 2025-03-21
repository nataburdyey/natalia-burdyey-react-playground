import { nanoid } from "nanoid";

import greatFrontEnd from "../assets/greatFrontEnd.svg";
import { greatFrontEndProjects } from "../data";

const Project = ({ project }) => {
  const { title, url, img, stack, id, repo, greatFrontEndLink } = project;

  return (
    <div className="project" key={id}>
      <h5>{title}</h5>
      <div className="label-container">
        <a href={greatFrontEndLink} target="_blank" rel="noreferrer">
          <img src={greatFrontEnd} alt="GreatFrontEnd Projects" />
        </a>
      </div>
      <a href={url}>
        <img src={img} alt={title} className="img" />
      </a>
      <p className="stack">
        {stack.map((item) => (
          <span key={nanoid()} className="stack-item">
            {item}
          </span>
        ))}

        <a
          href={repo}
          className="stack stack-item repo"
          target="_blank"
          rel="noreferrer"
        >
          GitHub Repo
        </a>
      </p>
    </div>
  );
};

const SectionHeader = () => (
  <div className="title">
    <a
      href="https://www.greatfrontend.com/projects"
      target="_blank"
      rel="noreferrer"
    >
      <h3 className="title">GreatFrontEnd Projects</h3>
      <h5>Interview Prep Platform</h5>
    </a>
    <div className="title-underline"></div>
  </div>
);

export const GreatFrontEndProjects = () => {
  return (
    <section className="projects">
      <SectionHeader />
      <div className="projects-center">
        {greatFrontEndProjects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

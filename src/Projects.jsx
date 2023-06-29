import { projects } from "./data";
import { nanoid } from "nanoid";

const Projects = () => {
  return (
    <section className="projects">
      <div className="title">
        <h2>Projects</h2>
        <div className="title-underline"></div>
      </div>
      <div className="projects-center">
        {projects.map((project) => {
          const { title, url, img, stack, repo } = project;
          return (
            <a
              key={nanoid()}
              href={url}
              target="_blank"
              rel="noreferrer"
              className="project"
            >
              <h5>{title}</h5>
              <img src={img} alt={title} className="img" />
              <p className="stack">
                {stack.map((item) => {
                  return (
                    <span key={nanoid()} className="stack-item">
                      {item}
                    </span>
                  );
                })}
                <a href={repo} className="stack-item" target="_blank">
                  GitHub Repository
                </a>
              </p>
            </a>
          );
        })}
      </div>
    </section>
  );
};
export default Projects;

import { nanoid } from "nanoid";
import { greatFrontEndProjects } from "../data";

export const GreatFrontEndProjects = () => {
  return (
    <section className="projects">
      <div className="title">
        <a
          href="https://www.greatfrontend.com/projects"
          target="_blank"
          rel="noreferrer"
        >
          <h3 className="title">GreatFrontEnd Projects</h3>
        </a>
        <div className="title-underline"></div>
      </div>
      <div className="projects-center">
        {greatFrontEndProjects.map((project) => {
          const { title, url, img, stack, id, repo } = project;
          return (
            <div className="project" key={id}>
              <a href={url}>
                <h5>{title}</h5>
                <img src={img} alt={title} className="img" />
              </a>
              <p className="stack">
                {stack.map((item) => {
                  return (
                    <span key={nanoid()} className="stack-item">
                      {item}
                    </span>
                  );
                })}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

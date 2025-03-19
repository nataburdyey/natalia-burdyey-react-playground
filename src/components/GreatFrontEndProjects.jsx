import { nanoid } from "nanoid";
import { greatFrontEndProjects } from "../data";
import greatFrontEnd from "../assets/greatFrontEnd.svg";

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
          <h5>Interview Prep Platform</h5>
        </a>
        <div className="title-underline"></div>
      </div>
      <div className="projects-center">
        {greatFrontEndProjects.map((project) => {
          const { title, url, img, stack, id, repo, greatFrontEndLink } =
            project;
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
                {stack.map((item) => {
                  return (
                    <span key={nanoid()} className="stack-item">
                      {item}
                    </span>
                  );
                })}

                <a
                  href={repo}
                  className="stack stack-item repo"
                  target="_blank"
                >
                  GitHub Repo
                </a>
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

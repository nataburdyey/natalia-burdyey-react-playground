import { stateManagementProjects } from "./data";
import { nanoid } from "nanoid";

const StateManagement = () => {
  return (
    <section className="projects">
      <div className="title" style={{ whiteSpace: "pre" }}>
        <h3>State Management With Redux</h3>
        <div className="title-underline"></div>
      </div>
      <div className="projects-center">
        {stateManagementProjects.map((project) => {
          const { title, url, img, stack, id } = project;
          return (
            <div className="project" key={id}>
              <a href={url} target="_blank" rel="noreferrer">
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

export default StateManagement;

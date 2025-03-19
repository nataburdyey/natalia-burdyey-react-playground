import { nanoid } from "nanoid";
import { reduxReactQueryRouterProjects } from "../data";

export const ReactQueryProjects = () => {
  return (
    <section className="projects">
      <div className="title" style={{ whiteSpace: "pre" }}>
        <h3>Redux, React Query, React Router,{"\n"}and External APIs</h3>
        <div className="title-underline"></div>
      </div>
      <div className="projects-center">
        {reduxReactQueryRouterProjects.map((project) => {
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

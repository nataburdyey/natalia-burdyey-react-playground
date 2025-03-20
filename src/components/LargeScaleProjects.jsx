/* eslint-disable no-undef */
import { nanoid } from "nanoid";

export const LargeScaleProjects = () => {
  return (
    <section className="projects">
      <div className="title" style={{ whiteSpace: "pre" }}>
        <h3>Large-Scale Projects</h3>
        <div className="title-underline"></div>
      </div>
      <div className="projects-center">
        {largeScaleProjects.map((project) => {
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

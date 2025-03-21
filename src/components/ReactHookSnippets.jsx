import { nanoid } from "nanoid";

import { reactHookSnippets } from "../data";

export const ReactHookSnippets = () => {
  return (
    <section className="projects">
      <div className="title">
        <h3>React Hook Snippets</h3>
        <div className="title-underline"></div>
      </div>
      <div className="projects-center">
        {reactHookSnippets.map((project) => {
          const { title, url, img, stack, id, repo } = project;
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

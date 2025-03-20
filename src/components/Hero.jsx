import heroImg from "../assets/online_resume.svg";
import { links, devTools } from "../data.jsx";

export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h2 style={{ whiteSpace: "pre" }}>
            Code, Create, React {"\n"}– By Natalia
          </h2>
          <p>
            As a passionate frontend engineer, I am committed to constant
            growth, refining my skills, and staying up-to-date with the latest
            trends and technologies in the field.
          </p>
          <p>
            Welcome to my personal collection of frontend mini-projects,
            developed to deepen my knowledge and expertise in React.
          </p>
          <p>
            With a solid foundation in testing, extensive frontend development
            expertise, a keen eye for quality, and a genuine passion for
            delivering exceptional user experiences, I bring a valuable set of
            skills and capabilities to every project I undertake.
          </p>
          <p>
            Feel free to connect with me on LinkedIn to engage in further
            professional discussions.
          </p>
          <ul className="social-links">
            {links.map((link) => {
              const { id, url, icon, color } = link;
              return (
                <li key={id}>
                  <a href={url} target="_blank" style={{ color: color }}>
                    {icon}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="hero-img">
          <img src={heroImg} alt="Natalia Burdyey's Projects" className="img" />
          <ul className="social-links">
            {devTools.map((tool) => {
              const { id, url, icon } = tool;
              return (
                <li key={id}>
                  <a href={url} target="_blank">
                    {icon}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

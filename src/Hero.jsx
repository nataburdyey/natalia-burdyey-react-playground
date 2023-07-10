import { nanoid } from "nanoid";
import heroImg from "./assets/online_resume.svg";
import { links, skills } from "./data";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h2 style={{ whiteSpace: "pre" }}>
            Natalia Burdyey's{"\n"}
            React Playground
          </h2>
          <p>
            As a passionate frontend engineer, I am dedicated to continuously
            refining my skills and keeping up with the ever-evolving trends and
            technologies in the field.
          </p>
          <p>
            This is my personal collection of frontend mini-projects, developed
            to deepen my knowledge and expertise in React.
          </p>
          <p>
            With a solid foundation in testing, extensive frontend development
            expertise, a keen eye for quality, and a genuine dedication to
            exceptional user experiences, I bring a valuable set of skills and
            capabilities to any project.
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
          <p className="stack">
            {skills.map((skill) => {
              return (
                <span key={nanoid()} className="stack-item">
                  {skill}
                </span>
              );
            })}
          </p>
        </div>
        <img src={heroImg} alt="Natalia Burdyey's Projects" className="img" />
      </div>
      
    </section>
  );
};

export default Hero;

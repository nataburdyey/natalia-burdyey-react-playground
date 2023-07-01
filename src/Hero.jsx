import heroImg from "./assets/online_resume.svg";
import { links } from "./data";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h2 style={{ whiteSpace: "pre" }}>
            Welcome to Natalia's {"\n"}
            Frontend Playground
          </h2>
          <p>
            As a dedicated frontend engineer with a deep passion for the field,
            I am constantly refining my skills and staying up-to-date with the
            latest trends and technologies.
          </p>
          <p>
            This is my personal collection of frontend mini-projects, developed
            to deepen my knowledge and expertise in React.
          </p>
          <p>
            Feel free to connect with me on LinkedIn to engage in further
            professional discussions. With a strong testing background,
            expertise in frontend development, meticulous attention to quality,
            and a passion for exceptional user experiences, I bring valuable
            skills and capabilities to the table.
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
        <img
          src={heroImg}
          alt="Natalia Burdyey's Portfolio Projects"
          className="img"
        />
      </div>
    </section>
  );
};

export default Hero;

import heroImg from "./assets/online_resume.svg";
import { links } from "./data";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h2 style={{ whiteSpace: "pre" }}>
            Natalia Burdyey's {"\n"}
            Web Portfolio
          </h2>
          <p>
            As a software developer and test engineer with extensive experience,
            I have decided to transition my career to become a full-time
            frontend engineer.
          </p>
          <p>
            Explore a collection of projects crafted during my spare time, along
            with access to their corresponding GitHub repositories.
          </p>
          <p>
            Connect with me on LinkedIn for further professional engagement.
            Witness my passion for frontend development and the growth of my
            skills in this exciting field.
          </p>
          <ul className="social-links">
            {links.map((link) => {
              const { id, url, icon, color } = link;
              console.log({ color });

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

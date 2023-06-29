import heroImg from "./assets/online_resume.svg";
import { links } from "./data";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Natalia Burdyey</h1>
          <p>
            As a software developer and test engineer with extensive experience,
            I have decided to transition my career to become a full-time
            frontend engineer.
          </p>
          <p>
            With a deep understanding of testing methodologies and a passion for
            frontend development, I bring a unique blend of skills and
            advantages to the table.
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

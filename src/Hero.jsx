import heroImg from "./assets/online_resume.svg";
// import heroImg from "./assets/work_in_progress.svg";
// import heroImg from './assets/career_development.svg'
// import heroImg from './assets/remote-work.svg'
// import heroImg from "./assets/working_remotely.svg";

const Hero = () => {
  return (
    <section className="hero">
      {/* <div className="hero-center">
        <div className="hero-title">
          <h1> Natalia Burdyey</h1>
          <p>My React Portfolio Project</p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="Natalia Burdyey's Portfolio Projects" />
        </div>
      </div> */}
      <div className="hero-center">
        <div className="hero-title">
          <h1>Natalia Burdyey</h1>
          <p>
            As a software developer and test engineer with extensive experience,
            I have decided to transition my career to become a full-time
            frontend engineer.{" "}
          </p>
          <p>
            With a deep understanding of testing methodologies and a passion for
            frontend development, I bring a unique blend of skills and
            advantages to the table.
          </p>
        </div>
        <img src={heroImg} alt="" className="img" />
      </div>
    </section>
  );
};
export default Hero;

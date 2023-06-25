// import heroImg from './assets/online_resume.svg'
import heroImg from "./assets/work_in_progress.svg";
// import heroImg from './assets/career_development.svg'
// import heroImg from './assets/remote-work.svg'
// import heroImg from "./assets/working_remotely.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1> Natalia Burdyey</h1>
          <p>My React Portfolio Project</p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="" />
        </div>
      </div>
    </section>
  );
};
export default Hero;

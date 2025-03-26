import { FaGithub, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

import profileImage from "./img/profile.png";

import "./profileCard.css";

export const ProfileCard = ({ name, title, description }) => {
  return (
    <div className="profile-card-page">
      <main className="container">
        <article className="profile-card">
          <section className="profile-details">
            <img src={profileImage} alt="Profile" className="profile-image" />
            <div className="profile-user">
              <h2 className="profile-name">{name}</h2>
              <h3 className="profile-title">{title}</h3>
            </div>
            <p className="profile-description">{description}</p>
          </section>
          <section className="profile-actions">
            <button className="profile-button">Contact Me</button>
            <div className="socials">
              <button>
                <FaGithub />
              </button>
              <button>
                <FaLinkedin />
              </button>
              <button>
                <FaInstagramSquare />
              </button>
              <button>
                <RiTwitterXFill />
              </button>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
};

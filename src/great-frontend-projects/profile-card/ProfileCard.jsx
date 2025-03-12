import React from "react";
import "./ProfileCard.css";

export const ProfileCard = ({ name, title, description }) => {
  return (
    <div className="container">
      <div className="profile-card">
        <h2 className="profile-name">{name}</h2>
        <h3 className="profile-title">{title}</h3>
        <p className="profile-description">{description}</p>
      </div>
      <div class="credits" data-gfe-screenshot-exclude="true">
        A challenge by{" "}
        <a
          href="https://www.greatfrontend.com/projects?ref=challenges"
          target="_blank"
        >
          GreatFrontEnd Projects
        </a>
        . Built by{" "}
        <a
          href="https://www.greatfrontend.com/projects/u/nataburdyey"
          target="_blank"
        >
          Natalia Burdyey
        </a>
        .
      </div>
    </div>
  );
};

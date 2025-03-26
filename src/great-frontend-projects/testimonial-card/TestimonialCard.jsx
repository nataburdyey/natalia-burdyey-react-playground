import React from "react";

import img from "./img/profile-thumbnail.png";

import "./css/style.css";

export const TestimonialCard = () => {
  return (
    <div className="main-container">
      <div className="testimonial-card">
        <div className="testimonial-card-header">
          <img src={img} className="profile-image" alt="Sarah Dole profile" />
          <div className="testimonial-card-about">
            <h3 className="testimonial-card-title">Sarah Dole</h3>
            <p>@sarahdole</p>
          </div>
        </div>
        <div className="testimonial-card-body">
          I've been searching for high-quality abstract images for my design
          projects, and I'm thrilled to have found this platform. The variety
          and depth of creativity are astounding!
        </div>
      </div>
    </div>
  );
};

import React from "react";
import "./CoverContent.css";

export default function CoverContent() {
  return (
    <>
      <div className="hero-container">
        <div className="header-containing-div">
          <div className="header-content">
            <h2 className="hero-text">
              Nourish, Move, Thrive:
              <br /> Your Complete Guide to
              <br />
              Better Health
            </h2>
          </div>
          <div className="tagline-container">
            <p className="tagline">
              Make healthy choices, move towards a better health.
            </p>
          </div>
        </div>
        <div className="button-container">
          <button className="check-health-btn">CHECK YOUR HEALTH</button>
        </div>
      </div>
    </>
  );
}

import React from "react";
import "./Cover.css";
import Navbar from "../Navbar/Navbar";
import CoverContent from "./CoverContent/CoverContent";

export default function Cover() {
  return (
    <>
      <div className="background-container">
        <img
          src="https://media-public.canva.com/_jv3M/MAEk3F_jv3M/1/s.jpg"
          className="backrgound-img"
          alt="background"
        />
      </div>

      <Navbar />
      <CoverContent />
      <div className="backdrop"></div>
    </>
  );
}

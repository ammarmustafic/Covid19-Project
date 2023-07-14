import React from "react";
import "./AboutUs.css";
import { FaLinkedin, FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import ammarImg from "./images/ammar.png";
import anesImg from "./images/anes.jpg";

const PersonCard = ({
  name,
  image,
  description,
  instagram,
  facebook,
  linkedin,
  github,
}) => (
  <div className="person-card">
    <img src={image} alt={name} className="person-image" />
    <h2
      className="person-name"
      style={{ textAlign: "center", fontSize: "20px" }}
    >
      {name}
    </h2>
    <span
      className="person-role"
      style={{
        fontStyle: "italic",
        fontSize: "16px",
        display: "block",
        textAlign: "center",
      }}
    >
      Web Developer
    </span>
    <div className="person-details">
      <div className="person-socials">
        {instagram && (
          <a href={instagram}>
            <FaInstagram />
          </a>
        )}
        {facebook && (
          <a href={facebook}>
            <FaFacebook />
          </a>
        )}
        {linkedin && (
          <a href={linkedin}>
            <FaLinkedin />
          </a>
        )}
        {github && (
          <a href={github}>
            <FaGithub />
          </a>
        )}
      </div>
      <p className="person-description">{description}</p>
    </div>
  </div>
);

const AboutUsPage = () => {
  return (
    <div className="about-us-container">
      <h1 className="about-us-heading">About Us</h1>
      <p className="about-us-p">Meet our team members who have contributed their creativity and hard work to bring this project to life.
</p>
      <div className="person-card-container">
        <PersonCard
          name="Ammar Mustafić"
          image={ammarImg}
          description="Ammar was in charge of the main functionalities of the project. He participated in all field, but the most at About Us Page, also home page."
          instagram="https://www.instagram.com/mustaficammar"
          facebook="https://www.facebook.com/ammar.mustafic.1/"
          linkedin="https://www.linkedin.com/in/ammar-mustafi%C4%87-2338b5254/?originalSubdomain=rs"
          github="https://github.com/ammarmustafic"
        />
        <PersonCard
          name="Anes Sarukić"
          image={anesImg}
          description="Anes is a talented frontend developer and he was the most deserving when it comes to the Country Stats Page."
          instagram="https://www.instagram.com/sarukic_a"
          facebook="https://www.facebook.com/aaanneess"
          linkedin="https://www.linkedin.com/in/anes"
          github="https://github.com/anesshare"
        />
        <PersonCard
          name="Ajša Nicević"
          description="Ajša offered solutions to our team so that everything would work, also she was the most deserving when it comes to the Covid Stats Page."
          instagram="https://www.instagram.com/ajsa"
          facebook="https://www.facebook.com/ajsa"
          linkedin="https://www.linkedin.com/in/ajsa"
          github="https://github.com/ajsa"
          className="ajsa"
        />
      </div>
    </div>
  );
};

export default AboutUsPage;

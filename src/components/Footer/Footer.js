import React from "react";
import { NavLink } from "react-router-dom";
import AboutUsPage from "../pages/AboutUs/AboutUs";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="social-icons">
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
        <ul>
          <li>
            <NavLink
              to="/covid-stats"
              activeClassName="active-link"
              onClick={() => window.scrollTo(0, 0)}
            >
              Covid Stats
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/country-stats"
              activeClassName="active-link"
              onClick={() => window.scrollTo(0, 0)}
            >
              Country Stats
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about-us"
              activeClassName="active-link"
              onClick={() => window.scrollTo(0, 0)}
            >
              About Us
            </NavLink>
          </li>
        </ul>
      </div>
      <p style={{ color: "#333" }}>&copy; 2023 COVID-19 API Project</p>
    </footer>
  );
}

export default Footer;

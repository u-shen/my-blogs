import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faYoutube,
  faTelegram,
  faReddit,
  faLinkedin,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../../assets/HELLSING.png";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <div className="navbar-container">
        <NavLink to="/">
          <div className="logo-container">
            <div className="imgs">
              <img className="logo" src={logo} alt="" />
            </div>
            <h1>ushen's blog</h1>
          </div>
        </NavLink>
        <NavLink className="login-icons" to="/login">
          <FontAwesomeIcon icon={faGoogle} />
        </NavLink>
        <nav className="navbar">
          <div className="social">
            <ul>
              <li>
                <a href="https://github.com/u-shen">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/channel/UC2N6GtH0Wh3HwBcLRW4DQhQ">
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/abderrazzak-farah-835aa130b/">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/abderrazzak-farah-835aa130b/">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/abderrazzak-farah-835aa130b/">
                  <FontAwesomeIcon icon={faTelegram} />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/abderrazzak-farah-835aa130b/">
                  <FontAwesomeIcon icon={faReddit} />
                </a>
              </li>
            </ul>
          </div>
          <div className="about-me">
            <ul>
              <li>
                <a href="https://discord.gg/invite/NMGXuV7e?role=your_role&username=u.shen">
                  discord
                </a>
              </li>
              <li>
                <NavLink to="/whoami">whoami</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;

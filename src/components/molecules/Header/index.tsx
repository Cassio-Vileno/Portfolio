import { useState } from "react";
import { GitHub } from "../../svg/gtihub";
import { Instagram } from "../../svg/instagran";
import { LinkedIn } from "../../svg/linkedin";
import "./styles.scss";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const animateLinks = (index: number) => {
    return {
      animation: `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`,
    };
  };

  return (
    <header>
      <nav className={isActive ? "active" : ""}>
        <img className="logo" src="images/athena_logo.svg" alt="athena_logo" />
        <div
          className={`mobile-menu ${isActive ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <ul className={`nav-list ${isActive ? "active" : ""}`}>
          <li style={animateLinks(0)}>
            <a onClick={toggleMenu} href="#presentation">
              Home
            </a>
          </li>
          <li style={animateLinks(1)}>
            <a onClick={toggleMenu} href="#technologies">
              Habilidades
            </a>
          </li>
          <li style={animateLinks(2)}>
            <a onClick={toggleMenu} href="#projects">
              Projetos
            </a>
          </li>
          <li style={animateLinks(3)}>
            <a onClick={toggleMenu} href="#projects">
              experiências
            </a>
          </li>
          <li style={animateLinks(4)}>
            <a onClick={toggleMenu} href="#">
              Sobre
            </a>
          </li>
          <li style={animateLinks(5)}>
            <a onClick={toggleMenu} href="#">
              Contato
            </a>
          </li>
        </ul>
        <div className="media">
          <a
            className="media-logo"
            target="_blank"
            href="https://github.com/Cassio-Vileno"
          >
            <GitHub />
          </a>
          <a
            className="media-logo"
            target="_blank"
            href="https://www.linkedin.com/in/cassio-vileno/"
          >
            <LinkedIn />
          </a>
          <a
            className="media-logo"
            target="_blank"
            href="https://www.instagram.com/vileno_dev/"
          >
            <Instagram />
          </a>
        </div>
      </nav>
    </header>
  );
};
export default Header;

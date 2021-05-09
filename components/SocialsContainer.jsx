import { faFacebookSquare, faGithub, faLinkedin, faTwitter, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialsContainer = () => {
  return (
    <ul className="socials-container">
      <li>
        <a href="https://www.linkedin.com/in/dominik-polzer-hi-o/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="2x" color="#000000" />
        </a>
      </li>

      <li>
        <a href="https://github.com/dommyrock" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2x" color="#000000" />
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com/dominik.polzerr" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebookSquare} size="2x" color="#000000" />
        </a>
      </li>

      <li>
        <a href="https://twitter.com/dompolzer" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitterSquare} size="2x" color="#000000" />
        </a>
      </li>
    </ul>
  );
};

export default SocialsContainer;

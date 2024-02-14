import Aboutimg from "../../assets/aboutme.png";
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
const AboutComponent = () => {
  return (
    <div className="about-section">
      <div className="about-left">
        <div className="about-left-content">
          <div>
            <div className="shadow">
              <div className="about-img">
                <img src={Aboutimg} alt="about" />
              </div>
            </div>
            <h2>
              Anant <br />
              Singh
            </h2>
            <h3>CS Undergraduate</h3>
          </div>

          <ul className="icons">
            <li>
              <a
                target="_blank"
                href="https://mobile.twitter.com/Anant__Singh_"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/anant-singh-64b45420a/"
              >
                <AiFillLinkedin />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://github.com/singh-anant">
                <AiOutlineGithub />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
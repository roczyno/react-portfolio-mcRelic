import "./about.scss";
import Background from "../../img/image_1.jpg";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-wrapper">
        <div className="about-left">
          <div className="image-container">
            <img src={Background} alt="" />
          </div>
        </div>
        <div className="about-right">
          <div className="about-info">
            <h1 className="about-title">About Me</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
              totam facilis exercitationem? Doloribus officia iste qui mollitia
              voluptatem! Fuga recusandae aspernatur illo magnam nihil error rem
              id necessitatibus debitis praesentium.
            </p>

            <button>
              <a href="#contact">Get in Touch</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

import htmlImg from "../images/html.png";
import cssImg from "../images/css.png";
import bootstrapImg from "../images/bootstrap.png";
import javascriptImg from "../images/javascript.png";
import reactImg from "../images/react.png";
import gitImg from "../images/git.png";
import javaImg from "../images/java.png";
import springImg from "../images/spring.png";

export const AboutMe = () => {
  const techList = [
    javaImg,
    springImg,
    gitImg,
    javascriptImg,
    reactImg,
    htmlImg,
    cssImg,
    bootstrapImg,
  ];

  return (
    <>
      <div className="card">
        <div className="card-body">
          <h1 className="card-title">About me</h1>
          <p className="card-text fs-4 text-secondary">
            Full-Stack developer graduated from Egg Education Bootcamp, where I
            mainly learned the stack JAVA, Spring Framework and ReactJS. I have
            done projects where I apply these skills. <br />
            <br />
            Since my beginning I feel a lot of attraction and passion for
            development, this makes me want to improve myself every day. I'm
            very constant and persevering, which always helps me to finish the
            tasks. <br /> <br />I would really love to continue working with
            JAVA and ReactJS and be able to dig into the depths of these
            languages and frameworks.
          </p>
          <br />
          <h1 className="card-title">Skills</h1>
          {techList.map((tech, index) => {
            return (
              <div
                className="img-thumbnail shadow bg-body-tertiary d-inline-block rounded-circle m-2"
                key={index}
              >
                <img src={tech} alt="Tech" />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

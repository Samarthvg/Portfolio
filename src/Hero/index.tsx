import { useInView } from "react-intersection-observer";
import "../Styles/index.scss";
export default function Hero() {
  const { ref: myRef, inView: isVisible } = useInView();

  return (
    <div
      className={`mb-5 text-light d-flex flex-column justify-content-center ${
        isVisible ? "show" : "hidden"
      }`}
      style={{paddingTop: "120px"}}
    >
      <div className="mb-5  ">
        <img
          className="w-100 rounded-5 me-5"
          src="/images/potrait.jpg"
          alt="potrait"
          style={{ maxWidth: "300px" }}
        />
      </div>
      <div className="wd-about w-75">
        <h1 ref={myRef} className="mb-5">About me </h1>
        <p className="about-para mb-4">
          A computer science master’s student at Northeastern University with a
          solid background in software development.
        </p>
        <p className="about-para mb-4">
          Originally from India and now in Boston, I’m currently exploring how
          artificial intelligence can be integrated with my software development
          experience to create innovative solutions.
        </p>

        <p className="about-para">
          Outside of tech, I’m a music enthusiast, a passion that provides a
          creative outlet that helps me approach technical challenges with a fresh perspective. 
        </p>
      </div>
    </div>
  );
}

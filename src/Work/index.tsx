import { useInView } from "react-intersection-observer";
import "../Styles/index.scss";
import Navbar from "../Navbar";
import Projects from "./Projects";

export default function Work() {
  const { ref: myRef, inView: isVisible } = useInView();

  return (
    <div className="container pt-5">
      <Navbar />
      <div
        className="py-5 text-light my-5 d-flex flex-column align-items-center"
        id="wd-work"
      >
        <div className="">
          <h1>Experience</h1>
          <div className="block my-5">
            <h3 className="wd-company">Simform</h3>
            <h4 className="wd-role">Web Developer</h4>
            <h5>2021-2022</h5>
          </div>

          <div className="block my-5">
            <h3 className="wd-company">CHARUSAT</h3>
            <h4 className="wd-role">NLP Researcher</h4>
            <h5>2021-2022</h5>
          </div>

          <div className="block my-5">
            <h3 className="wd-company">JSBot</h3>
            <h4 className="wd-role">JavaScript Developer</h4>
            <h5>2021-2022</h5>
          </div>
        </div>
        <Projects />
      </div>
    </div>
  );
}

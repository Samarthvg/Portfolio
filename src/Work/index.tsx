import { useInView } from "react-intersection-observer";
import "../Styles/index.scss";

export default function Work() {
  const { ref: myRef, inView: isVisible } = useInView();

  return (
    <div
      className={`bg-dark py-5 text-light my-5 ${isVisible ? "show" : "hidden"}`}
      id="wd-work"
    >
      <h2 className="mb-5 text-center">
        Work experience
      </h2> 

    <div style={{position:"relative"}}>
    <div className="container timeline">
        <div className="row mb-4"> 
          <div className="col-md-6 d-flex justify-content-center" style={{ position: "relative" }}>
            <div className="">
              <img className="company-logo" src="/images/simform.png" alt="" />
              <div className="p-4 company-wrapper bg-secondary rounded-4" id="wd-simform">
                <h3 className="wd-role">
                  Simform <br /> Frontend Developer
                </h3>
                <h5 ref={myRef}>2021-2022</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-4 justify-content-end">
          <div className="col-md-6 d-flex justify-content-center" style={{ position: "relative" }}>
            <div className="">
              <img className="company-logo right" ref={myRef} src="/images/charusat.png" alt="" />
              <div className="p-4 company-wrapper bg-secondary rounded-4" id="wd-charusat">
                <h3 className="wd-role">
                  CHARUSAT <br /> NLP Researcher
                </h3>
                <h5>2021-2022</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-md-6 d-flex justify-content-center" style={{ position: "relative" }}>
            <div className="">
              <img className="company-logo border border-secondary border-2 p-1" src="/images/jsbot.png" alt="" />
              <div className="p-4 company-wrapper bg-secondary rounded-4" id="wd-jsbot">
                <h3 className="wd-role">
                  JSBot <br /> JavaScript Developer
                </h3>
                <h5>2021-2022</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

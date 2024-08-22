import "./index.css";

export default function Projects() {
  const codereq = () => {
    alert("Code avaliable upon request.");
  };
  return (
    <div className="projects my-5">
      <h1 className="mb-5">Projects</h1>
      
      <div className="justify-content-center image-track d-flex flex-column position-relative">
       
        <div className="project-item left d-flex mb-5 ">
          <div className="image">
            <img
              className=""
              onClick={codereq}
              src="/images/PortfolioTab.png"
              alt=""
            />
          </div>

          <div className="project-desc ">
            <h3>Invest Simulation</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, nemo?</p>
          </div>

           </div>

          <div className="project-item right d-flex mb-5 position-relative">
          <div className="image">
            <a href="https://samarth-kanbas-react-web-app.netlify.app/#/Labs/TOC">
              <img className="" src="/images/kanbas.png" alt="" />
            </a>
          </div>
          <div className="project-desc ">
            <h3>Invest Simulation</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, nemo?</p>
          </div>
          </div>
       

        <div className="project-item left d-flex mb-5 position-relative">
          <div className="image">
            <a href="https://samarthvg.github.io/Figma-design-yellow/">
              <img className="" src="/images/figma-yellow.png" alt="" />
            </a>
          </div>
          <div className="project-desc ">
            <h3>Invest Simulation</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, nemo?</p>
          </div>
        </div>


        <div className="project-item right d-flex mb-5 position-relative">
          <div className="image">
            <a href="https://samarthvg.github.io/Figma-design/">
              <img className="" src="/images/figma-blue.png" alt="" />
            </a>
          </div>
          <div className="project-desc ">
            <h3>Invest Simulation</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, nemo?</p>
          </div>
        </div>
      </div>
    </div>
  );
}

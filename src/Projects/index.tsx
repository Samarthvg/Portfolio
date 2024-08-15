import './index.css';

export default function Projects() {

  const codereq = () =>{
    alert("Code avaliable upon request.")
  }
  return (
    <div className="projects bg-dark my-5">
      <h1>Projects</h1>
      <div className='justify-content-center image-track d-flex'>
   
      <img className="image m-3" onClick={codereq} src="/images/PortfolioTab.png" alt="" />
    <br />
        <a href="https://samarth-kanbas-react-web-app.netlify.app/#/Labs/TOC">
          <img className="image m-3" src="/images/kanbas.png" alt="" />
        </a>
        <br />
        <a href="https://samarthvg.github.io/Figma-design-yellow/">
          <img className="image m-3" src="/images/figma-yellow.png" alt="" />
        </a>
         <br />
        <a href="https://samarthvg.github.io/Figma-design/">
          <img className="image m-3" src="/images/figma-blue.png" alt="" />
        </a>
      </div>
    </div>
  );
}

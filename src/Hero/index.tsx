
import { useInView } from "react-intersection-observer";
import "../Styles/index.scss";
export default function Hero() {
  const {ref: myRef, inView: isVisible} = useInView();
  
  return (
    <div className=" my-5 bg-dark text-light d-flex justify-content-center">
      <div className="overflow-hidden bg-dark w-25 p-5" >
      <img 
      className="w-100 h-100 rounded-5"
        src="/images/potrait.jpg" alt="potrait" />
      </div>
      <div className="wd-about w-50 my-5 px-5">
        <h1 ref={myRef}>About me </h1>
        <p className={`about-para ${isVisible ? 'show' : 'hidden'}`} >  
          A computer science master’s student at Northeastern University with a
          solid background in software development. 
          <br />
          <br />
          Originally from India and
          now in Boston, I’m currently exploring how artificial intelligence can
          be integrated with my software development experience to create
          innovative solutions. 
          <br />
          <br />
          Outside of tech, I’m a music enthusiast, a
          passion that provides a creative outlet that helps me approach
          technical challenges with fresh and innovative perspectives. My goal
          is to harness AI to address real-world problems and contribute to the
          community’s growth. Looking forward to the future :D
        </p>
      </div>
    </div>
  );
}

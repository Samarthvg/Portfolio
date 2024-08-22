import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import Navbar from "../Navbar";
import Hero from "../Hero";
import Tech from "../Tech";
import Uses from "../Uses";

export default function LandingPage() {
  const [activeSection, setActiveSection] = useState(0);

  const { ref: heroRef, inView: heroInView } = useInView({
    threshold: 0.5,
    onChange: (inView) => inView && setActiveSection(0),
  });

  const { ref: techRef, inView: techInView } = useInView({
    threshold: 0.5,
    onChange: (inView) => inView && setActiveSection(1),
  });

  const { ref: usesRef, inView: usesInView } = useInView({
    threshold: 0.5,
    onChange: (inView) => inView && setActiveSection(2),
  });

  return (
    <div className="container">
      <Navbar />
      <div className="content">
        <div className="left-pane">
          <div className="scroll-content">
            <div className={activeSection === 0 ? 'active' : ''}>
               <Hero />
            </div>
            <div className={activeSection === 1 ? 'active' : ''}>
              <Tech />
            </div>
            <div className={activeSection === 2 ? 'active' : ''}>
              <Uses />
            </div>
          </div>
        </div>
        <div className="right-pane">
          <section ref={heroRef}>
            <Hero />
          </section>
          <section ref={techRef}>
            <Tech />
          </section>
          <section ref={usesRef}>
            <Uses />
          </section>
        </div>
      </div>
    </div>
  );
}

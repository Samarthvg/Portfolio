import { useInView } from "react-intersection-observer";
export default function Tech() {
  const { ref: myRef, inView: isVisible } = useInView();

  return (
    <div className={`text-light my-5 ${isVisible ? 'show': 'hidden'}`}>
      <h1 ref={myRef} className="mb-5">TECH</h1>
      
      <ul className="">
        <li>react</li>
        <li>node</li>
        <li>express</li>
        <li>mongodb</li>
        <li>postgres</li>
        <li>java</li>
        <li>html</li>
        <li>scss</li>
        <li>typescript</li>
        <li>typescript</li>
      </ul>
    </div>
  );
}

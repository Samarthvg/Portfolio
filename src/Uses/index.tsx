import { FaFirefox } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { SiIntellijidea } from "react-icons/si";
import { IoLogoAndroid } from "react-icons/io";
import { IoIosLaptop } from "react-icons/io";

export default function Uses() {
  return (
    <div className="text-light my-5 d-flex flex-column ">
      <h1 className="mb-5">USES</h1>
      <div className="row justify-content-center mb-3 w-75"> 
        <div className="col-12 col-sm-6 col-md-4">
          <div className="uses-item bg-secondary rounded-4 d-flex flex-column align-items-center justify-content-center">
            <VscVscode className="mb-3" style={{ fontSize: "2rem" }} /> 
            <label>Visual Studio </label>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 ">
          <div className="uses-item bg-secondary rounded-4 d-flex flex-column align-items-center justify-content-center">
            <SiIntellijidea className="mb-3" style={{ fontSize: "2rem" }} /> 
            <label>IntelliJ IDEA</label>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 ">
          <div className="uses-item bg-secondary rounded-4 d-flex flex-column align-items-center justify-content-center">
            <FaFirefox className="mb-3" style={{ fontSize: "2rem" }} /> 
            <label>Mozilla Firefox</label>
          </div>
        </div>
      </div>

      <div className="row justify-content-center w-75">
        <div className="col-12 col-sm-6 col-md-4 ">
          <div className="uses-item  bg-secondary rounded-4 d-flex flex-column align-items-center justify-content-center">
            <IoIosLaptop className="mb-3" style={{ fontSize: "2rem" }} />
            <label>Zephyrus G14</label>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 ">
          <div className="uses-item  bg-secondary rounded-4 d-flex flex-column align-items-center justify-content-center">
            <IoLogoAndroid className="mb-3" style={{ fontSize: "2rem" }} />
            <label>Pixel 6a</label>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 ">
          <div className="uses-item bg-secondary rounded-4 d-flex flex-column align-items-center justify-content-center"> 
            <img
              className="mb-3"
              src="/images/gpt.png"
              alt="ChatGPT"
              style={{ width: "30px" }}
            />
            <label>ChatGPT</label>
          </div>
        </div>
      </div>
    </div>
  );
}

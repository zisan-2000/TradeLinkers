
import logo from "../assets/logo.png";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import SocialMedia from "../components/SocialMedia";
import UnderConstruction from "../components/UnderConstruction";

function Maintainence(){
    return (
        <div className="bg-[#c00000]">
        <div className="p-4">
          <div className="flex flex-col items-center md:flex-row md:items-start">
            <img
              src={logo}
              alt=""
              className="hidden h-[108px] w-[400px] md:block"
            />
            <div className="w-full">
              <div className="flex h-[43px] flex-col items-center justify-between md:flex-row">
                <Contact />
                <SocialMedia />
              </div>
              <Navbar />
            </div>
          </div>
          <div className=" mt-4 bg-white items-center justify-center">
            <UnderConstruction />
          </div>
        </div>
      </div>
    );
}
 export default Maintainence;
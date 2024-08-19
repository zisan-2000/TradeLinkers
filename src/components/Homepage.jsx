
import MainNav from "./MainNav";
import logo from '../assets/logo.png'
import Contact from "./Contact";
import SocialMedia from "./SocialMedia";
import CarouselDefault from "./CarouselDefault";
function HomePage(){
    return(
         <div className="bg-[#c00000] h-screen ">
            <div className="p-4 ">
                <div className="flex  ">
                    <img src={logo} alt="" className="h-[108px] w-[400px]"/>
                    <div className="w-full">
                        <div className=" h-[43px] flex justify-between">
                            <Contact/>
                            <SocialMedia/>
                        </div>
                        <div className="">
                            <MainNav/>
                        </div>
                    </div>
                </div>
                <div className="py-4 h-[500px] ">
                    <CarouselDefault/>
                </div>
            </div>
         </div>
    );
}
export default HomePage;
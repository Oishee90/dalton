import About from "../About";
import DownloadApp from "../DownloadApp";
import LandingPage from "../ExploreApps";
import ExploreApps from "../ExploreApps";
import ExploreAppsSmallDevice from "../ExploreAppsSmallDevice";
import Founder from "../Founder";
import HowtoUse from "../HowtoUse";
import SmallDeviceTestimonial from "../SmallDeviceTestimonial";
import Testimonial from "../Testimonial";
import Banner from "./Banner";
import Footer from "./Footer";
import Navbar from "./Navbar";
import shapes from "../../assets/Shapesbanner.png";

const Home = () => {
  return (
    <div className=" bg-black ">
      <div className="bg-black  ">
        <div className="bg-black min-h-screen relative">
          <div className="bg-gradient-to-tr from-black via-black to-[#674932] h-[400px] w-full">
            <Navbar />

            <Banner />
          </div>

          <div className="absolute lg:top-[70%] top-[30%] left-0 z-0 ">
            <img src={shapes} alt="" />
          </div>
        </div>
      </div>
      <div className="bg-black  w-full relative  ">
        <About></About>
      </div>
      <div className="bg-[#F1F5F9] hidden lg:block  ">
        <LandingPage></LandingPage>
      </div>
      <div className="bg-[#F1F5F9] lg:hidden ">
        <ExploreAppsSmallDevice></ExploreAppsSmallDevice>
      </div>
      {/* how to use..download */}
      <div className="bg-black  w-full">
        <HowtoUse />
      </div>
      <div className="bg-black  w-full">
        <DownloadApp />
      </div>
      <div className="bg-black  w-full">
        <Founder></Founder>
      </div>
      <div className="bg-black  w-full lg:hidden">
        <SmallDeviceTestimonial />
      </div>

      <div className="bg-black hidden lg:block w-full">
        <Testimonial />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;

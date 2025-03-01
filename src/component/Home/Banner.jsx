/* eslint-disable react/no-unescaped-entities */

import banner from "../../assets/banner.png";
import rectangle from "../../assets/Rectangle 5.png";
import google from "../../assets/toppng-1.png";
import apple from "../../assets/PngItem_1144050 2.png";

const Banner = () => {
  return (
    <div
      id="home"
      className="relative z-20  lg:left-[0%]  lg:mt-15 container mx-auto  "
    >
      <div className="flex flex-col lg:flex-row  2xl:gap-50 items-center   ">
        {/* images */}
        <div className=" relative lg:left-[-5%]  w-[70%] lg:w-1/2  ">
          <img src={banner} alt="" className="w-full object-cover " />
        </div>
        {/* containt */}

        <div className="relative   w-[60%] sm:w-[50%]  lg:mt-20  lg:left-[0%] mt-15 ">
          <img
            src={rectangle}
            alt=""
            className="lg:h-[535px] h-[340px] w-auto lg:w-[550px]"
          />
          <div className="absolute sm:top-[-10%] top-[5%] left-[-28%] sm:left-[5%] lg:top-[7%] lg:left-[-10%] w-[360px] lg:w-[550px] ">
            <div className="bg-[#FFFFFF] w-[270px] sm:w-[372px] lg:w-auto h-[300px] sm:h-[350px] lg:h-[450px] flex flex-col items-start justify-center pl-6 pb-6 pr-6 pt-6 ">
              <h1 className="common-color text-xl sm:text-3xl lg:text-4xl font-bold lg:leading-[130%] josefin uppercase ">
                Get More Done, Without the Stress of Organization.
              </h1>
              <p className="mt-2 lg:mt-7 sm:text-lg text-xs common-color font-bold">
                Reclaim your time and find clarity in your day. eSort's smart
                agenda organizes everything in one place, so you can focus on
                what truly matters.
              </p>
              <h3 className="mt-2 lg:mt-6 sm:text-xl text-lg font-semibold  josefin uppercase">
                Download App Now
              </h3>
              <div className="flex gap-6 mb-4  mt-2 items-center">
                <a href="https://play.google.com/store/apps?hl=en&pli=1">
                  <img src={google} alt />
                </a>

                <a href="https://www.apple.com/app-store/">
                  <img src={apple} alt="" />{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

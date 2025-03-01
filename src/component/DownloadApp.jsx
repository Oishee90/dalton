import apple from "../assets/PngItem_1144050 2.png";
import google from "../assets/toppng-1.png";
import bg from "../assets/Group 55.png";
import download from "../assets/iphone-lg.png";

const DownloadApp = () => {
  return (
    <div className="bg-black  h-[609px] lg:h-full pt-30 lg:pt-16 ">
      <div className="bg-black h-auto">
        <div className=" w-full  pt-40 z-0 relative">
          <img src={bg} alt="" className="w-full" />
          <div className=" absolute top-[-3%] left-[5%] flex justify-between items-center ">
            <div className=" w-full h-full ">
              <img src={download} alt="" className="w-full h-full " />
            </div>
            <div className="lg:flex flex-col items-start justify-start gap-5 lg:gap-10 p-2 hidden">
              <h1 className="roboto font-bold text-3xl  lg:text-5xl text-[#FFFFFF]">
                Download the app today
              </h1>
              <p className="roboto font-normal text-base lg:text-lg text-[#FFFFFF]">
                Stay on top of your competition with a great performing app.
                Your time and energy are not wasted.
              </p>
              <div className="flex gap-6 items-center">
                <a href="https://play.google.com/store/apps?hl=en&pli=1">
                  <img src={google} alt />
                </a>

                <a href="https://www.apple.com/app-store/">
                  <img src={apple} alt="" />{" "}
                </a>
              </div>
            </div>
            {/* small device */}
          </div>
          <div className=" absolute top-[99%] left-[5%] lg:hidden mt-10 ">
            <h1 className="roboto font-bold text-2xl text-[#FFFFFF] mb-3">
              Download the app today
            </h1>
            <p className="roboto font-normal text-lg text-[#FFFFFF] mb-3">
              Stay on top of your competition with a great performing app. Your
              time and energy are not wasted.
            </p>
            <div className="flex gap-6 items-center">
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
  );
};

export default DownloadApp;

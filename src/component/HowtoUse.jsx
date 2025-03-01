/* eslint-disable react/no-unescaped-entities */
import mobile from "../assets/howtouse.png";
const HowtoUse = () => {
  return (
    <div id="solutions" className=" bg-black">
      <div className="relative">
        <div className=" container mx-auto pt-10 lg:pt-20">
          <h1 className="text-center font-bold josefin text-2xl lg:text-4xl leading-[47.3px]  text-[#ECECEC] ">
            How to use The app
          </h1>
          <p className=" w-full md:w-2/3 mx-auto text-center text-[#ECECEC] josefin leading-[24px] text-base lg:text-xl p-4">
            Our app offers an advanced AI-powered task management service
            designed to simplify and streamline your daily activities. With
            intelligent features that prioritize, organize, and track your tasks
            efficiently, we help you stay on top of your goals. Whether it's
            personal to-dos or professional projects, our platform ensures that
            you focus on what matters most while we handle the rest.
          </p>
          <div className="relative h-[614px]  lg:h-[900px]">
            {/* video  */}
            <div className="flex justify-end mt-10 p-2 bg-black/10 blackdrop-blur-md h-[402px] z-50">
              <div
                className="w-4/5 md:w-3/5 "
                style={{ width: "847px", height: "360px" }}
              >
                <video
                  src="/myvideo.mp4"
                  controls
                  className="w-full rounded-3xl shadow-lg "
                />
              </div>
            </div>

            {/* image */}
            <div className=" absolute top-[50%] lg:top-[52%] left-[0%] lg:left-[10%]  z-20 ">
              <img src={mobile} alt="" className="w-auto" />
            </div>
          </div>
          <div className="absolute top-[70%] z-10 ">
            <img
              src="https://res.cloudinary.com/dhlgk023u/image/upload/v1739791085/Ellipse_22_dwswy4.png"
              alt=""
              className="w-[100%] h-[400px] lg:h-[600px]  "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowtoUse;

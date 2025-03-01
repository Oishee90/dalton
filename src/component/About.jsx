/* eslint-disable react/no-unescaped-entities */
import { RiCheckboxCircleFill } from "react-icons/ri";
import about from "../assets/about.png";
import black from "../assets/Black.png";
import laptop from "../assets/laptop.png";
import watch from "../assets/watch.png";

const About = () => {
  return (
    <div
      id="about"
      className="2xl:mt-50  lg:mt-70 sm:mt-50  mt-30 relative lg:mb-10  text-white flex lg:flex-row flex-col items-center lg:items-start  container mx-auto pl-3 pr-3  pt-10"
    >
      {/* content */}
      <div className="w-full ">
        <h1 className="text-center font-bold josefin  text-3xl lg:text-5xl  leading-[47.3px] mb-6">
          About Our App
        </h1>
        <p className=" text-[#CFC6C6] josefin leading-[24px] text-base lg:text-xl  text-center">
          Our app offers an advanced AI-powered task management service designed
          to simplify and streamline your daily activities. With intelligent
          features that prioritize, organize, and track your tasks efficiently,
          we help you stay on top of your goals. Whether it's personal to-dos or
          professional projects, our platform ensures that you focus on what
          matters most while we handle the rest.
        </p>
        {/* card-1 */}
        <div className="rounded-xl bg-[#5A90CE] p-6 pb-7 pt-7 lg:w-3/4 mt-6 relative">
          <div className="flex justify-center gap-4 z-10 relative">
            <RiCheckboxCircleFill className="text-white w-[28px] h-[28px]" />

            <div className="relative z-20">
              <h3 className="text-[20px] josefin font-semibold text-white">
                Smart Task Prioritization
              </h3>
              <p className="text-[#FFFFFF] text-base font-normal josefin mt-3">
                Our AI evaluates deadlines, importance, and dependencies to
                recommend which tasks to focus on first.
              </p>
            </div>
          </div>
          <div className="absolute top-[50%] right-[3%] lg:right-[0%] z-0 transform ">
            <img src={black} alt="Decorative" className=" " />
          </div>
        </div>

        {/* card-2 */}
        <div className="rounded-xl  bg-[#A585C1] p-6 pb-7 pt-7 lg:w-3/4 mt-6 relative">
          <div className="flex justify-center gap-4 z-10 relative">
            <RiCheckboxCircleFill className="text-white w-[28px] h-[28px]" />

            <div>
              <h3 className="text-[20px] josefin    font-semibold  text-white">
                Automated Scheduling
              </h3>
              <p className="text-[#FFFFFF] text-base font-nromal josefin mt-3">
                Plan your day seamlessly as the app automatically schedules
                tasks based on your availability.
              </p>
            </div>
          </div>
          <div className="absolute right-[3%] top-[0%] lg:right-[0%] z-0 transform ">
            <img src={laptop} alt="Decorative" className=" " />
          </div>
        </div>
        {/* card-3 */}
        <div className="rounded-xl  bg-[#9459D5] p-6 pb-7 pt-7 lg:w-3/4 mt-6  relative">
          <div className="flex justify-center gap-4 z-10 relative">
            <RiCheckboxCircleFill className="text-white w-[28px] h-[28px]" />

            <div>
              <h3 className="text-[20px] josefin    font-semibold  text-white">
                Real-Time Reminders
              </h3>
              <p className="text-[#FFFFFF] text-base font-nromal josefin mt-3">
                Stay on track with instant notifications and reminders for
                upcoming deadlines.
              </p>
            </div>
          </div>
          <div className="absolute  right-[8%] top-[0%] lg:right-[20%] z-0 transform ">
            <img src={watch} alt="Decorative" className=" " />
          </div>
        </div>
      </div>

      {/* image */}
      <div className="w-full ">
        <img src={about} alt="" />
      </div>
    </div>
  );
};

export default About;

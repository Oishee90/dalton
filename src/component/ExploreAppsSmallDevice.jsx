/* eslint-disable react/no-unescaped-entities */
import explore from "../assets/explore.png";
const ExploreAppsSmallDevice = () => {
  return (
    <div className=" pt-10 pl-3 pr-3">
      {/* Header Section */}
      <div className="text-center pb-14 pl-3 pr-3 ">
        <h1 className="text-center font-bold josefin text-3xl lg:text-5xl leading-[47.3px] mb-6 ">
          Explore Our App's Intuitive Interface
        </h1>
        <p className="mx-auto font-normal text-justify text-[#5E5E5E] josefin leading-[24px] text-base ">
          Discover the sleek and user-friendly design of our app, crafted to
          provide a seamless task management experience. Navigate effortlessly
          through an interface that combines functionality with modern
          aesthetics, making it easier than ever to organize your to-dos and
          accomplish your goals efficiently.
        </p>
      </div>

      <div className="flex flex-col  ">
        {/* content */}
        <div className="">
          {/* 1` */}
          <div className="w-[60%] p-4 relative left-[31%] ">
            <h3 className="text-base  font-semibold josefin text-[#A585C1] mb-2">
              REAL-TIME REMINDERS
            </h3>
            <p className="josefin text-sm text-[#6C6C72] font-normal ">
              Stay on track with instant notifications and reminders for
              upcoming deadlines.
            </p>
          </div>
          {/* 2 */}
          {/* <div className=" relative right-[-40%] w-[50%] ">
            <h3 className="text-base justify-end items-end font-semibold josefin text-[#F4A261] mb-2">
              Collaboration Tools
            </h3>
            <p className="josefin text-sm justify-end items-end text-[#6C6C72] font-normal  ">
              Share tasks and collaborate with teammates effortlessly, ensuring
              everyone stays aligned.
            </p>
          </div> */}
          {/* 3 */}
          <div className="w-[60%] p-4 ">
            <h3 className="text-base  font-semibold josefin text-[#A585C1] mb-2 uppercase">
              Automated Scheduling
            </h3>
            <p className="josefin text-sm text-[#6C6C72] font-normal ">
              Stay on track with instant notifications and reminders for
              upcoming deadlines.
            </p>
          </div>
          {/* 4 */}
          <div className=" relative right-[-40%] w-[50%] ">
            <h3 className="text-base justify-end items-end font-semibold josefin text-[#5A90CE] mb-2 uppercase">
              Progress Insights
            </h3>
            <p className="josefin text-sm justify-end items-end text-[#6C6C72] font-normal  ">
              Get detailed reports and analytics to track your productivity and
              identify areas for improvement.
            </p>
          </div>
          {/* 5 */}
          <div className="w-[60%] p-4 ">
            <h3 className="text-base  font-semibold josefin text-[#F4A261] mb-2 uppercase">
              Real-Time Reminders
            </h3>
            <p className="josefin text-sm text-[#6C6C72] font-normal ">
              Stay on track with instant notifications and reminders for
              upcoming deadlines.
            </p>
          </div>
          {/* 6 */}
          <div className=" relative right-[-40%] w-[50%] ">
            <h3 className="text-base justify-end items-end font-semibold josefin text-[#9459D5] mb-2 uppercase">
              Customization Categories
            </h3>
            <p className="josefin text-sm justify-end items-end text-[#6C6C72] font-normal  ">
              Organize tasks into personalized categories for better clarity and
              focus.
            </p>
          </div>
        </div>
        <div className="  mx-auto items-center">
          <img src={explore} alt="iPhone Task App Interface" className="" />
        </div>
      </div>

      {/* Main Content with Fixed Positioning */}
      <div className="relative h-[600px] hidden">
        {/* Left Side Features */}
        <div className="absolute left-[140px] top-[0%] w-[350px]">
          <h3 className="text-lg font-semibold josefin uppercase text-[#A585C1] mb-2">
            REAL-TIME REMINDERS
          </h3>
          <p className="josefin text-lg text-[#6C6C72] font-normal ">
            Stay on track with instant notifications and reminders for upcoming
            deadlines.
          </p>
        </div>

        <div className="absolute left-[9%] top-[33%] w-[350px]">
          <h3 className="text-lg font-semibold josefin text-[#9459D5] uppercase mb-2">
            AUTOMATED SCHEDULING
          </h3>
          <p className="josefin text-lg text-[#6C6C72] font-normal">
            Stay on track with instant notifications and reminders for upcoming
            deadlines.
          </p>
        </div>

        <div className="absolute left-[25%] top-[65%] w-[350px]">
          <h3 className="text-lg font-semibold josefin text-[#F4A261] uppercase  mb-2">
            REAL-TIME REMINDERS
          </h3>
          <p className="josefin text-lg text-[#6C6C72] font-normal">
            Stay on track with instant notifications and reminders for upcoming
            deadlines.
          </p>
        </div>

        {/* Center Images */}
        <div className="absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 flex gap-20">
          <img
            src={explore}
            alt="iPhone Task App Interface"
            className="w-full h-auto"
          />
        </div>

        {/* Right Side Features */}
        <div className="absolute right-[20%] top-[0%] w-[400px] text-left">
          <h3 className="text-lg font-semibold josefin text-[#F4A261] mb-2 uppercase">
            Collaboration Tools
          </h3>
          <p className="josefin text-lg text-[#6C6C72] font-normal">
            Share tasks and collaborate with teammates effortlessly, ensuring
            everyone stays aligned.
          </p>
        </div>

        <div className="absolute right-[10%] top-[33%] w-[350px]">
          <h3 className="text-lg font-semibold josefin text-[#5A90CE] mb-2 uppercase  ">
            PROGRESS INSIGHTS
          </h3>
          <p className="josefin text-lg text-[#6C6C72] font-normal">
            Get detailed reports and analytics to track your productivity and
            identify areas for improvement.
          </p>
        </div>

        <div className="absolute right-[10%] top-[65%] w-[350px]">
          <h3 className="text-lg font-semibold josefin text-[#9459D5] mb-2  ">
            CUSTOMIZABLE CATEGORIES & TASK
          </h3>
          <p className="josefin text-lg text-[#6C6C72] font-normal">
            Organize tasks/notes into personalized categories
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExploreAppsSmallDevice;

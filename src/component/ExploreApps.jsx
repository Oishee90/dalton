/* eslint-disable react/no-unescaped-entities */
import explore from "../assets/explore.png";
export default function LandingPage() {
  return (
    <div className=" mx-auto pt-16">
      {/* Header Section */}
      <div className="text-center mb-24">
        <h1 className="text-center font-bold josefin lg:text-5xl leading-[47.3px] mb-6 ">
          Explore Our App's Intuitive Interface
        </h1>
        <p className="mx-auto mb-2 w-2/3 font-normal text-center text-[#5E5E5E] josefin leading-[24px] text-xl">
          Discover the sleek and user-friendly design of our app, crafted to
          provide a seamless task management experience. Navigate effortlessly
          through an interface that combines functionality with modern
          aesthetics, making it easier than ever to organize your to-dos and
          accomplish your goals efficiently.
        </p>
      </div>

      {/* Main Content with Fixed Positioning */}
      <div className="relative h-[700px]">
        {/* Left Side Features */}
        <div className="absolute left-[9%] top-[7%] w-[350px] bg-[#5A90CE]  p-4 rounded-xl">
          <h3 className="text-lg font-semibold josefin text-white  mb-2">
            REAL-TIME REMINDERS
          </h3>
          <p className="josefin text-lg text-white  font-normal ">
            Stay on track with instant notifications and reminders for upcoming
            deadlines.
          </p>
        </div>

        <div className="absolute left-[9%] top-[40%] w-[350px] bg-[#F4A261]  p-4 rounded-xl">
          <h3 className="text-lg font-semibold josefin text-white mb-2">
            AUTOMATED SCHEDULING
          </h3>
          <p className="josefin text-lg text-white font-normal">
            Stay on track with instant notifications and reminders for upcoming
            deadlines.
          </p>
        </div>

        <div className="absolute left-[37%] top-[77%] w-[350px] bg-[#9459D5]  p-4 rounded-xl">
          <h3 className="text-lg font-semibold josefin text-white mb-2">
            REAL-TIME REMINDERS
          </h3>
          <p className="josefin text-lg text-white font-normal">
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
        {/* <div className="absolute right-[20%] top-[0%] w-[400px] text-left">
          <h3 className="text-lg font-semibold josefin text-[#F4A261] mb-2">
            Collaboration Tools
          </h3>
          <p className="josefin text-lg text-[#6C6C72] font-normal">
            Share tasks and collaborate with teammates effortlessly, ensuring
            everyone stays aligned.
          </p>
        </div> */}

        <div className="absolute lg:right-[0%] 2xl:right-[10%] top-[25%] w-[350px] bg-[#A585C1]  p-4 rounded-xl">
          <h3 className="text-lg font-semibold josefin text-white mb-2">
            PROGRESS INSIGHTS
          </h3>
          <p className="josefin text-lg text-white font-normal">
            Get detailed reports and analytics to track your productivity and
            identify areas for improvement.
          </p>
        </div>

        <div className="absolute lg:right-[0%] 2xl:right-[10%]  top-[60%] w-[350px] bg-[#5A90CE]  p-4 rounded-xl">
          <h3 className="text-base font-semibold josefin text-white mb-2">
            CUSTOMIZABLE CATEGORIES & TASK
          </h3>
          <p className="josefin text-lg text-white font-normal">
            Organize tasks/notes into personalized categories
          </p>
        </div>
      </div>
    </div>
  );
}

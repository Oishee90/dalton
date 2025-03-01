/* eslint-disable react/no-unescaped-entities */
import founder from "../assets/dalton.png";
import dalton from "../assets/daltonboss.png";
const Founder = () => {
  const testimonials = [
    {
      id: 1,
      name: "Dalton Callahan",
      role: "CO-FOUNDER",
      image:
        "https://res.cloudinary.com/dwycwft99/image/upload/v1740206720/Profile_Image_xofdlf.png",
      content:
        "eSort began as a personal quest for order. I was overwhelmed by the daily grind, constantly switching between disjointed notes, calendars, and to-do apps. The stress of a fragmented schedule and missed deadlines was real. Realizing this wasn't just my problem, I set out to build eSort – the unified agenda app designed to bring calm and control to busy lives.",
    },
  ];

  return (
    <div>
      {/* Header Section */}
      <div className="text-center mb-10 pt-70 ">
        <h1 className="text-center font-bold josefin text-[#FFFFFF] text-2xl lg:text-5xl leading-[47.3px] mb-2 ">
          Founder
        </h1>
      </div>
      <div className="gap-8 ">
        {testimonials.map(({ id, name, image, content }) => (
          <div
            key={id}
            className="bg-[#79A78D] p-8 text-center shadow-xl hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="flex justify-center mb-6">
              <img
                src={dalton}
                alt={name}
                className="w-24 h-24 rounded-full object-cover"
              />
            </div>
            <h2 className="text-3xl josefin font-bold mb-2 text-[#FFFFFF]">
              {name}
            </h2>

            <p className="text-[#FFFFFF] josefin lg:w-3/5 mx-auto text-xl  leading-[36px] mt-6">
              {content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Founder;

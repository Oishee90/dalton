/* eslint-disable react/no-unescaped-entities */
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, EffectCards } from "swiper/modules";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/effect-cards";
// import "./testimonial.css";

// const testimonials = [
//   {
//     id: 1,
//     name: "Ann Lubin",
//     role: "CO-FOUNDER",
//     image:
//       "https://res.cloudinary.com/dhlgk023u/image/upload/v1740284167/Profile_Image_msjs6c.png",
//     content:
//       "Managing daily tasks efficiently is crucial, and this AI-based task management app takes productivity to the next level. Designed with an intuitive interface, it seamlessly integrates AI-powered features to automate, prioritize, and optimize task completion.",
//   },
//   {
//     id: 2,
//     name: "SARAH PARKER",
//     role: "DESIGNER",
//     image:
//       "https://res.cloudinary.com/dhlgk023u/image/upload/v1740284167/Profile_Image_msjs6c.png",
//     content:
//       "Managing daily tasks efficiently is crucial, and this AI-based task management app takes productivity to the next level. Designed with an intuitive interface, it seamlessly integrates AI-powered features to automate, prioritize, and optimize task completion.",
//   },
//   {
//     id: 3,
//     name: "JOHN SMITH",
//     role: "DEVELOPER",
//     image:
//       "https://res.cloudinary.com/dhlgk023u/image/upload/v1738496016/9334243_puz7m4.jpg",
//     content:
//       "Managing daily tasks efficiently is crucial, and this AI-based task management app takes productivity to the next level. Designed with an intuitive interface, it seamlessly integrates AI-powered features to automate, prioritize, and optimize task completion.",
//   },
// ];
import { useState } from "react";
import Swal from "sweetalert2";


export default function TestimonialSlider() {
  const [comment, setComment] = useState("");

const handleSubmit = (e) => {
  e.preventDefault();
  if (!comment.trim()) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Comment cannot be empty!",
    });
    return;
  }

  Swal.fire({
    icon: "success",
    title: "Successfully Submitted!",
    text: "Your comment has been recorded.",
  });
  setComment("");
};
  return (
    <div className="pt-10 pb-16">
      <div className="text-center mt-20">
        <h1 className="text-center text-white font-bold josefin text-2xl lg:text-5xl leading-[47.3px] mb-6 ">
          Our Happy Customers
        </h1>
        <p className="mx-auto w-full  md:w-1/2 font-normal text-center text-[#cecece] josefin leading-[24px] lg:text-xl mb-8">
          Customers appreciate the app’s user-friendly interface and quick AI
          features. Some requested more customization options and better
          third-party integration.
        </p>
      </div>

      <div className=" bg-black flex items-center justify-center p-4">
        {/* <div className="w-full max-w-3xl">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards, Pagination]}
            pagination={{
              clickable: true,
            }}
            className="w-full"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-white rounded-3xl p-8 text-center shadow-xl">
                  <div className="flex justify-center mb-6">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-24 h-24 rounded-full object-cover"
                    />
                  </div>
                  <h2 className="text-3xl font-bold mb-2 josefin text-[#232233]">
                    {testimonial.name}
                  </h2>
                  <h3 className="text-[#232233] font-semibold text-lg mb-6 josefin ">
                    {testimonial.role}
                  </h3>
                  <p className="text-[#6C6C72] font-normal  josefin leading-relaxed">
                    {testimonial.content}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div> */}
         <div className="w-full max-w-3xl p-4">
        <form
          onSubmit={handleSubmit}
          className="border border-[#79A78D] rounded-2xl p-4 bg-black"
        >
          <textarea
            className="w-full h-40 p-3 text-white bg-black border-none outline-none resize-none"
            placeholder="Type Your comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <div className="flex justify-end mt-2">
            <button
              type="submit"
              className="text-lg josefin  bg-[#79A78D] px-6 py-2 rounded-lg text-white font-semibold hover:bg-[#78ae8f]"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
      </div>
    </div>
  );
}

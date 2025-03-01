import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import "./testimonial.css"; // Make sure to add custom styles if needed

const SmallDeviceTestimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Ann Lubin",
      role: "CO-FOUNDER",
      image:
        "https://res.cloudinary.com/dhlgk023u/image/upload/v1740284167/Profile_Image_msjs6c.png",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.",
    },
    {
      id: 2,
      name: "SARAH PARKER",
      role: "DESIGNER",
      image:
        "https://res.cloudinary.com/dhlgk023u/image/upload/v1740284167/Profile_Image_msjs6c.png",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.",
    },
    {
      id: 3,
      name: "JOHN SMITH",
      role: "DEVELOPER",
      image:
        "https://res.cloudinary.com/dhlgk023u/image/upload/v1738496016/9334243_puz7m4.jpg",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.",
    },
  ];

  return (
    <div className="bg-black py-12 pl-3 pr-3 pt-24 lg:pt-5">
      <div className="text-center ">
        <h1 className="text-center text-white font-bold josefin text-3xl lg:text-5xl leading-[47.3px] mb-6 ">
          Our Happy Customers
        </h1>
        <p className="mx-auto w-full  md:w-1/2 font-normal text-center text-[#e4dfdf] josefin leading-[24px] text-base mb-8">
          Customers appreciate the app’s user-friendly interface and quick AI
          features. Some requested more customization options and better
          third-party integration.
        </p>
      </div>
      <div className="w-full max-w-3xl mx-auto">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
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
                <h3 className="text-[#232233] font-semibold text-lg mb-6 josefin">
                  {testimonial.role}
                </h3>
                <p className="text-[#6C6C72] font-normal josefin leading-relaxed">
                  {testimonial.content}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SmallDeviceTestimonial;

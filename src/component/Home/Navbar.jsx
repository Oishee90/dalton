import { useEffect, useState } from "react";
import { IoMail } from "react-icons/io5";
import { MdLocalPhone } from "react-icons/md";
import { RiFacebookFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const menuItems = [
    { name: "Home", id: "home" },
    { name: "Solutions", id: "solutions" },
    // { name: "Pricing", id: "pricing" },
    { name: "About", id: "about" },
  ];

  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
  };

  useEffect(() => {
    const handleScrollEvent = () => {
      menuItems.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScrollEvent);
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, []);

  return (
    <div id="home" className="container mx-auto z-20">
      <div className="flex pt-4 pb-3 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 md:gap-15">
          <div className="flex items-center text-[10px] md:text-base gap-2  lg:gap-4 text-white josefin">
            <IoMail /> daltonscallahan@gmail.com
          </div>
          <div className="flex items-center gap-2 text-[10px] md:text-base  lg:gap-4 text-white  whitespace-nowrap  josefin">
            <MdLocalPhone />
            4239676768
          </div>
        </div>
        {/* Buttons & Mobile Menu Toggle */}
        <div className="flex items-center gap-2 lg:gap-10">
          <div className="hidden sm:flex gap-4"></div>
          <a href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F">
            <RiFacebookFill className="text-white cursor-pointer w-[14px] h-[14px] md:w-[18px] md:h-[18px]" />
          </a>
          <a href="https://www.instagram.com/">
            <AiFillInstagram className="text-white cursor-pointer w-[14px] h-[14px] md:w-[18px] md:h-[18px]" />
          </a>
          <a href="https://x.com/?lang=en&mx=2">
            {" "}
            <FaTwitter className="text-white cursor-pointer w-[14px] h-[14px] md:w-[18px] md:h-[18px]" />
          </a>
          <a href="https://www.youtube.com/">
            {" "}
            <FaYoutube className="text-white cursor-pointer w-[14px] h-[14px] md:w-[18px] md:h-[18px]" />
          </a>
        </div>
      </div>
      <header className=" relative text-white">
        <div className="flex pt-4 pb-6 items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-15">
            <a href="#" className="text-teal-600">
              <img
                src={logo}
                alt="Logo"
                className="w-[46px] h-[46px] lg:w-[79px] lg:h-[79px] "
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <ul className="flex items-center gap-9 text-sm">
                {menuItems.map(({ name, id }) => (
                  <li key={id}>
                    <button
                      onClick={() => handleScroll(id)}
                      className={`text-base font-normal transition cursor-pointer ${
                        activeSection === id
                          ? "text-purple-400 border-b-2 border-purple-400"
                          : "text-white over:text-gray-100"
                      }`}
                    >
                      {name}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          {/* Buttons & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            {/* Mobile Menu Button */}
            <button
              className="md:hidden block p-2.5 rounded-md  text-white transition hover:text-gray-600/75 "
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Toggle menu</span>
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <nav className="md:hidden mt-2 w-1/2 bg-[#79A78D] blackdrop-blur-lg py-4 z-100 absolute top-[60%] right-[7%] md:right-0  rounded-l-2xl">
            <ul className="flex flex-col items-center gap-4 text-white">
              {menuItems.map(({ name, id }) => (
                <li key={id}>
                  <button
                    onClick={() => {
                      handleScroll(id);
                      setIsOpen(false);
                    }}
                    className={`text-base font-normal transition cursor-pointer ${
                      activeSection === id
                        ? "text-[#9459D5] border-b-2 border-[#9459D5]"
                        : "text-white hover:text-gray-100"
                    }`}
                  >
                    {name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>
    </div>
  );
};

export default Navbar;

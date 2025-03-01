import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { BsTwitter } from "react-icons/bs";
import { SiYoutube } from "react-icons/si";
const Footer = () => {
  return (
    <footer className="bg-[#E89F66] py-12">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div>
            <h2 className="text-white text-3xl font-bold josefin ">Logo</h2>
            <p className="text-white font-normal mt-4 leading-relaxed josefin text-base">
              Your Smart Agenda
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-4 text-white">
              <a
                href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F"
                className="text-white border-2 border-l-0 border-t-0 border-b-0 border-r-white pr-6 text-lg"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/"
                className="text-white border-2 border-l-0 border-t-0 border-b-0 border-r-white pr-6 pl-4 text-lg"
              >
                <RiInstagramFill />
              </a>
              <a
                href="https://www.instagram.com/"
                className="text-white border-2 border-l-0 border-t-0 border-b-0 border-r-white pr-6 pl-4 text-lg"
              >
                <BsTwitter />
              </a>
              <a
                href="https://www.youtube.com/"
                className="text-white border-2 border-l-0 border-t-0 border-b-0 border-r-white pr-6 pl-4 text-lg"
              >
                <SiYoutube />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:mt-0 mt-8">
            <h3 className="text-white text-2xl font-semibold leading-[37.5px] josefin ">
              QUICK LINK
            </h3>
            <ul className="text-white mt-4 space-y-2 josefin text-base font-normal">
              <li>
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Screenshot
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:mt-0 mt-8">
            <h3 className="text-white text-2xl font-semibold leading-[37.5px] josefin">
              NEWS LETTER
            </h3>
            <p className="text-white mt-4 space-y-2 josefin text-base font-normal">
              Subscribe to our newsletter to get our latest update & news
            </p>
            <div className="mt-4 flex bg-white rounded-md  overflow-hidden">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 w-full text-gray-700 outline-none"
              />
              <button className="bg-[#F4A261] px-4 py-1 border border-white rounded-lg text-white">
                ➤
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-white mt-10 pt-6 text-center text-white text-lg josefin font-normal">
          <p>© Copyright 2021 .Ojjomedia. All Right Reserved..</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

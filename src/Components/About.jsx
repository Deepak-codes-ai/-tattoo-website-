import React from "react";
import pxbg from "../assets/px-bg1.jpg";
import {
  FaCheck,
  FaClock,
  FaUsers,
  FaSmile,
  FaHandPeace,
} from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <div className="w-full min-h-[600px] bg-[#ebece0] flex flex-col lg:flex-row gap-8">
        {/* Left Image Section */}
        <div className="lg:w-1/2 w-full relative pl-0">
          <img src={pxbg} alt="About" className="w-full h-full object-cover" />

          {/* Centered Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
            <p className="text-sm md:text-base">WE ARE AWESOME</p>
            <h2 className="text-3xl md:text-5xl font-bold mt-2">
              <span className="text-orange-500">ABOUT</span> UNICO TATTO
            </h2>
          </div>
        </div>

        {/* Right Content Section */}
        <div className="lg:w-1/2 w-full flex flex-col justify-center px-8 lg:px-20">
          <h2 className="text-2xl md:text-4xl font-bold text-orange-500 mb-4">
            MEAT WITH OUR AWESOME TEMPLATE
          </h2>
          <p className="text-gray-700 mb-4 text-sm md:text-base">
            Where text is visible in a document, people tend to focus on the
            textual content rather than upon overall presentation...
          </p>
          <ul className="space-y-2 text-gray-700 text-sm md:text-base">
            <li className="flex items-start gap-2">
              <FaCheck className="text-orange-500 mt-1" />
              Many tattoo parlors offer personalized consultations to create
              custom tattoos that reflect a client’s personality, story, or
              vision.
            </li>
            <li className="flex items-start gap-2">
              <FaCheck className="text-orange-500 mt-1" />
              Reputable shops prioritize cleanliness and follow strict hygiene
              protocols using sterilized equipment, single-use needles, and
              high-grade inks.
            </li>
            <li className="flex items-start gap-2">
              <FaCheck className="text-orange-500 mt-1" />
              Whether it’s minimalist symbols or full-sleeve tattoos, good
              studios cater to a variety of tattoo styles and client
              preferences.
            </li>
            <li className="flex items-start gap-2">
              <FaCheck className="text-orange-500 mt-1" />
              Due to its resemblance to classical Latin, it is not intended to
              have meaning.
            </li>
          </ul>

          <button className="mt-6 w-[120px] rounded-t-2xl rounded-l-2xl border border-black text-black px-6 py-2 hover:bg-black hover:text-white transition cursor-pointer font-bold overflow-hidden relative group h-[42px]">
            <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 transform group-hover:translate-y-full">
              Learn More
            </span>
            <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 transform -translate-y-full group-hover:translate-y-0">
              Learn More
            </span>
          </button>
        </div>
      </div>

      {/* Centered text */}
      <div className="flex flex-col items-center justify-center text-center py-16 px-4 bg-white">
        {/* Heading */}
        <h1 className="text-orange-500 text-xl md:text-2xl font-bold">
          WE ARE AWESOME,
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          CHECK SOME INTERESTING FACTS
        </h2>
        <p className="text-gray-600 max-w-3xl mb-10">
          Unico Tattoo is a modern and stylish tattoo studio website that
          showcases professional tattoo artists, creative designs, pricing, and
          a vibrant gallery of artwork. It’s designed to attract, inform, and
          inspire tattoo enthusiasts while making it easy to book consultations
          or connect on social media.
        </p>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-6xl">
          {/* Box 1 */}
          <div className="border p-6 flex flex-col items-center justify-center shadow-md relative group h-64 hover:text-orange-400 duration-500 cursor-pointer">
            <div className="absolute -top-5 bg-white px-3 py-1 border rounded">
              <FaClock className="text-2xl" />
            </div>
            <h1 className="text-4xl font-bold mt-6">48</h1>
            <p className="text-sm text-gray-600 mt-2 uppercase tracking-wide">
              Work in Progress
            </p>
          </div>

          {/* Box 2 */}
          <div className="border p-6 flex flex-col items-center justify-center shadow-md relative group hover:text-orange-400 duration-500 cursor-pointer">
            <div className="absolute -top-5 bg-white px-3 py-1 border rounded">
              <FaHandPeace className="text-2xl" />
            </div>
            <h1 className="text-4xl font-bold mt-6">1786</h1>
            <p className="text-sm text-gray-600 mt-2 uppercase tracking-wide">
              Projects Completed
            </p>
          </div>

          {/* Box 3 */}
          <div className="border p-6 flex flex-col items-center justify-center shadow-md relative group hover:text-orange-400 duration-500 cursor-pointer">
            <div className="absolute -top-5 bg-white px-3 py-1 border rounded">
              <FaUsers className="text-2xl" />
            </div>
            <h1 className="text-4xl font-bold mt-6">28</h1>
            <p className="text-sm text-gray-600 mt-2 uppercase tracking-wide">
              Members
            </p>
          </div>

          {/* Box 4 */}
          <div className="border p-6 flex flex-col items-center justify-center shadow-md relative group hover:text-orange-400 duration-500 cursor-pointer">
            <div className="absolute -top-5 bg-white px-3 py-1 border rounded">
              <FaSmile className="text-2xl" />
            </div>
            <h1 className="text-4xl font-bold mt-6">2800</h1>
            <p className="text-sm text-gray-600 mt-2 uppercase tracking-wide">
              Happy Clients
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

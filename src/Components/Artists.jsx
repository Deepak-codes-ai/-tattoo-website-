import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";

const artistsData = [
  {
    name: "Ava Ink",
    role: "Portrait Specialist",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Leo Sharp",
    role: "Black & Gray Artist",
    image: "https://randomuser.me/api/portraits/men/34.jpg",
  },
  {
    name: "Mia Shade",
    role: "Watercolor Expert",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
  },
  {
    name: "Jax Flame",
    role: "Geometric Designer",
    image: "https://randomuser.me/api/portraits/men/28.jpg",
  },
];

const Artists = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div id="artist"
      className="w-full min-h-screen"
      style={{
        backgroundImage: `url('src/assets/team-bg.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Hero Section */}
      <div
        className="w-full h-[400px] bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1603914698235-84a1d25dd0d0")`,
        }}
      >
        <div className="bg-black bg-opacity-60 p-6 rounded-lg text-center">
          <h1 className="text-4xl font-bold text-orange-400">
            Our Tattoo Artists
          </h1>
          <p className="text-sm mt-2">
            Skilled. Creative. Passionate. Meet the faces behind the ink.
          </p>
        </div>
      </div>

      {/* Artists Grid */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {artistsData.map((artist, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl overflow-hidden text-center p-4 hover:shadow-lg transition"
            >
              <img
                src={artist.image}
                alt={artist.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h2 className="font-semibold text-lg">{artist.name}</h2>
              <p className="text-sm text-gray-500">{artist.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Full-Width Gradient Section */}
      <div className="w-full bg-gradient-to-r from-orange-500 via-red-500 text-white py-16 px-4 text-center rounded-lg mt-12 ">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Are You Interested In Getting Inked?
        </h2>
        <p className="text-lg mb-6">
          <i>
            Reach out to us and share your ideas — our artists are ready to
            bring them to life!
          </i>
        </p>
        <button className="bg-white text-orange-600 font-semibold px-6 py-3 rounded-full hover:bg-black hover:text-white transition duration-300">
          Contact Us
        </button>
      </div>

      {/* Watch Video Button Styled Like Template */}
      <div className="flex flex-col items-center justify-center mt-16 mb-0">
        <h1 className="text-white text-5xl py-4 px-4 mb-15">
          Redy For Starting Busness With Unico
        </h1>
        <button
          onClick={() => setShowVideo(true)}
          className="w-20 h-20 flex items-center justify-center border-4 border-white rounded-full bg-transparent text-white hover:bg-white hover:text-orange-600 transition duration-300"
        >
          <FaPlay className="text-2xl ml-1" />
        </button>
        <p className="text-white text-xl mt-4 mb-20">Watch Video Tutorial</p>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setShowVideo(false)}
        >
          <div
            className="relative w-full max-w-3xl aspect-video px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-4 text-white text-3xl"
              onClick={() => setShowVideo(false)}
            >
              &times;
            </button>
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/GJAsS6FoOWo?autoplay=1"
              title="Tattoo Making Video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default Artists;

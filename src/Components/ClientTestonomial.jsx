import React, { useState } from "react";
import bgImage from "../assets/gimg-8.jpg"; // Replace with your background image

const testimonials = [
  {
    author: "Magnam EA",
    content:
      "Getting my first tattoo at Unico Tattoo was an incredible experience. The artist really took the time to understand what I wanted and turned my idea into a stunning piece of art. I constantly get compliments on it!",
  },
  {
    author: "John Doe",
    content:
      "I was nervous about getting a large piece, but the team at Unico Tattoo made me feel comfortable and confident from the consultation to the final inking. The shading and detail are beyond what I expected.",
  },
  {
    author: "Sarah Lee",
    content:
      "Unico Tattoo has a vibe like no other. Clean, professional, and full of creativity. My sleeve turned out even better than the reference I brought in. Can't wait to book my next session!",
  },
];

const ClientTestonomial = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div id="testimonials"
      className="w-full min-h-full bg-cover bg-center text-white px-4 py-16 flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundColor: "#000000a3",
        backgroundBlendMode: "overlay",
      }}
    >
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
        <span className="text-orange-400">CLIENTS</span>{" "}
        <span>TESTIMONIALS</span>
      </h1>
      <p className="text-center max-w-xl mb-10 text-gray-200 text-sm">
        Here are three client testimonials tailored for a tattoo studio like
        Unico Tattoo. You can include them in your testimonial section with
        sliding or scrolling animations as desired:
      </p>

      {/* Testimonial Content */}
      <div className="relative w-full max-w-2xl h-32 overflow-hidden">
        <div
          className="flex transition-transform duration-700"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {testimonials.map((item, i) => (
            <div key={i} className="min-w-full px-6 text-center">
              <h3 className="text-white text-lg font-semibold mb-2">
                “ {item.author}
              </h3>
              <p className="text-sm text-white/90">{item.content}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Cube Buttons */}
      <div className="flex gap-3 mt-8">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`w-4 h-4 rounded-sm ${
              i === activeIndex ? "bg-orange-400" : "bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ClientTestonomial;

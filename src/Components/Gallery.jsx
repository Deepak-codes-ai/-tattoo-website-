import React, { useState } from "react";
import gim1 from "../assets/gimg-1.jpg";
import gim2 from "../assets/gimg-2.jpg";
import gim3 from "../assets/gimg-3.jpg";
import gim4 from "../assets/gimg-4.jpg";
import gim5 from "../assets/gimg-5.jpg";
import gim6 from "../assets/gimg-6.jpg";
import gim7 from "../assets/gimg-7.jpg";
import gim8 from "../assets/gimg-8.jpg";
import gim9 from "../assets/gimg-9.jpg";
import gim10 from "../assets/gimg-10.jpg";
import gim11 from "../assets/gimg-11.jpg";
import gim12 from "../assets/gimg-12.jpg";
import gim13 from "../assets/gimg-13.jpg";
import gim14 from "../assets/gimg-14.jpg";
import gim15 from "../assets/gimg-15.jpg";
import gim16 from "../assets/gimg-16.jpg";
import {
  ChevronLeft,
  ChevronRight,
  X,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const Gallery = () => {
  const initialImages = [gim1, gim2, gim3, gim4, gim5, gim6, gim7, gim8];
  const moreImages = [gim9, gim10, gim11, gim12, gim13, gim14, gim15,gim16];
  const allImages = [...initialImages, ...moreImages];

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);
  const prevImage = () => setCurrentIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
  const nextImage = () => setCurrentIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));
  const toggleShowMore = () => setShowMore((prev) => !prev);

  return (
    <section id="gallery">
      <div className="w-full min-h-screen bg-gradient-to-b from-orange-400 to-blue-300 text-white relative">
        {/* Header */}
        <section className="max-w-5xl mx-auto px-4 py-20 flex flex-col items-center text-center">
          <h1 className="uppercase text-4xl md:text-5xl font-extrabold mb-6">
            <i className="text-amber-50">Art Gallery</i>{" "}
            <span className="text-black">Unico Tattoo</span>
          </h1>
          <p className="text-lg max-w-3xl text-white/90">
            Explore our diverse collection of artistic tattoos crafted by
            professional artists at Unico Tattoo. From minimalist designs to full
            sleeves, our gallery showcases the creativity and precision that
            define our work. Each piece tells a story — let yours be next.
          </p>
        </section>

        {/* Main Images */}
        <div className="mx-auto px-4 pb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1">
            {initialImages.map((img, index) => (
              <div
                key={index}
                className="overflow-hidden rounded shadow-lg cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={img}
                  alt={`tattoo-${index + 1}`}
                  className="w-full h-100 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>

          {/* Show More Button */}
          <div className="flex justify-center mt-4">
            <button
              onClick={toggleShowMore}
              className="flex flex-col items-center px-4 py-4 text-2xl bg-opacity-50 rounded hover:bg-opacity-70 duration-1000 cursor-pointer"
            >
              <span>{showMore ? "Show Less" : "Show More"}</span>
              {showMore ? <ChevronUp size={60} /> : <ChevronDown size={60} />}
            </button>
          </div>

          {/* Show More Images */}
          {showMore && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1 mt-6">
              {moreImages.map((img, index) => (
                <div
                  key={`more-${index}`}
                  className="overflow-hidden rounded shadow-lg cursor-pointer"
                  onClick={() => openLightbox(initialImages.length + index)}
                >
                  <img
                    src={img}
                    alt={`tattoo-more-${index + 1}`}
                    className="w-full h-100 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Lightbox */}
        {lightboxOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white hover:text-gray-300"
            >
              <X size={30} />
            </button>
            <button
              onClick={prevImage}
              className="absolute left-6 text-white hover:text-gray-300"
            >
              <ChevronLeft size={40} />
            </button>
            <img
              src={allImages[currentIndex]}
              alt={`tattoo-large-${currentIndex + 1}`}
              className="max-w-full max-h-[80vh] rounded shadow-lg"
            />
            <button
              onClick={nextImage}
              className="absolute right-6 text-white hover:text-gray-300"
            >
              <ChevronRight size={40} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;

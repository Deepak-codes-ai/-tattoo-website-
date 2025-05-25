import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import header1 from "../assets/header.jpg";
import header2 from "../assets/header3.jpg";
import {
  FaFacebook,
  FaWhatsapp,
  FaLinkedin,
  FaInstagram,
  FaBars,
  FaTimes,
  FaArrowLeft,
  FaArrowRight,
  FaMagnet,
} from "react-icons/fa";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [bgIndex, setBgIndex] = useState(0);

  const backgrounds = [header1, header2];

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleBg = (direction) => {
    setBgIndex((prev) =>
      direction === "left"
        ? (prev - 1 + backgrounds.length) % backgrounds.length
        : (prev + 1) % backgrounds.length
    );
  };

  // Auto change background every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgrounds.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [backgrounds.length]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Menu items with hrefs to sections
  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Artist", href: "#artist" },
    { name: "Price", href: "#price" },
    { name: "Art Gallery", href: "#gallery" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const socialIcons = [
    {
      icon: <FaFacebook />,
      link: "https://www.facebook.com/thakur.deepaknadai.3",
    },
    { icon: <FaWhatsapp />, link: "https://wa.me/9026984307" },
    {
      icon: <FaInstagram />,
      link: "https://www.instagram.com/chauhan_deep_0/",
    },
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/deepak-chauhan-614b4a305?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
  ];

  const linkStyle = "hover:text-orange-500 cursor-pointer";

  return (
    // The whole Home section needs id="home" for scroll
    <section
      id="home"
      className="w-full h-[120vh] flex flex-col justify-center items-center relative transition-all duration-1000"
      style={{
        backgroundImage: `url(${backgrounds[bgIndex]})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 py-7 md:px-20 transition-colors duration-300 z-50 ${
          scrolled ? "bg-[#3a474d]/90" : "bg-transparent"
        }`}
      >
        <img className="w-[200px] md:w-[240px]" src={logo} alt="Logo" />
        <ul className="flex gap-8 items-center ml-auto text-white text-lg max-[1300px]:hidden">
          {menuItems.map(({ name, href }) => (
            <li key={name} className={linkStyle}>
              {/* Use anchor tags for scrolling to sections */}
              <a href={href} onClick={() => setIsOpen(false)}>
                {name}
              </a>
            </li>
          ))}
          {socialIcons.map((social, idx) => (
            <li key={idx} className={linkStyle}>
              <a href={social.link}>{social.icon}</a>
            </li>
          ))}
        </ul>
        {/* Hamburger menu icon for mobile */}
        <div
          className="ml-auto text-white text-2xl hidden max-[1300px]:block"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>

      {/* Mobile Dropdown menu */}
      {isOpen && (
        <ul
          className={`custom-scrollbar fixed top-[88px] left-0 w-full text-white text-2xl font-semibold flex flex-col gap-y-8 px-4 py-4 z-40 transition-all duration-300 h-[35vh] overflow-auto ${
            scrolled ? "bg-[#3a474d]/90" : "bg-transparent"
          }`}
        >
          {menuItems.map(({ name, href }) => (
            <li key={name} className={linkStyle}>
              <a href={href} onClick={() => setIsOpen(false)}>
                {name}
              </a>
            </li>
          ))}
          {socialIcons.map((social, idx) => (
            <li key={idx} className={linkStyle}>
              <a href={social.link}>{social.icon}</a>
            </li>
          ))}
        </ul>
      )}

      {/* Background toggle arrows */}
      <button
        onClick={() => toggleBg("left")}
        className="absolute left-4 md:left-12 text-white text-3xl"
      >
        <FaArrowLeft />
      </button>
      <button
        onClick={() => toggleBg("right")}
        className="absolute right-4 md:right-12 text-white text-3xl"
      >
        <FaArrowRight />
      </button>

      {/* Centered Content */}
      <div className="flex flex-col items-center justify-center text-center mt-24 md:mt-32 px-4 max-w-[1000px]">
        <h1 className=" text-white text-lg md:text-8xl font-bold mb-4">
          Unico Tattoo Best <p className="text-orange-400 inline">Tattoo</p>{" "}
          Designers
        </h1>
        <p className="text-white text-base md:text-3xl">
          Unico Tattoo is a modern and stylish tattoo studio website that
          showcases professional tattoo artists, creative designs, pricing, and
          a vibrant gallery of artwork. It’s designed to attract, inform, and
          inspire tattoo enthusiasts while making it easy to book consultations
          or connect on social media.
        </p>
      </div>

      <FaMagnet className="mt-40 text-orange-400 text-4xl cursor-pointer" />
    </section>
  );
};

export default Home;

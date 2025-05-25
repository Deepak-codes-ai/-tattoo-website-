import React from "react";
import logo from "../assets/logo.png";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo + Description */}
        <div>
          <h2 className="text-white font-bold text-xl mb-4"><img src={logo} alt="" /></h2>
          <p className="text-sm">
            Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.
            Sed non mauris vitae erat consequat auctor eu in elit.
          </p>
        </div>

        {/* Address */}
        <div>
          <h3 className="text-white font-semibold mb-4">ADDRESS</h3>
          <p className="text-sm">
            9443 Indian Pines, Chesapeake, Kansas, 66437-0148, US
          </p>
          <p className="text-orange-400 mt-2">contact@yourdomain.com</p>
        </div>

        {/* Phone */}
        <div>
          <h3 className="text-white font-semibold mb-4">PHONE</h3>
          <p className="text-sm">Phone: +88 (0) 123 000 000</p>
          <p className="text-sm">Fax: +88 (0) 702 000 888</p>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white font-semibold mb-4">NEWSLETTER</h3>
          <form className="flex flex-col gap-3">
            <input
              type="email"
              required
              placeholder="Your email"
              className="px-3 py-2 rounded border border-gray-600 bg-gray-800 text-sm text-white focus:outline-none"
            />
            <button
              type="submit"
              
              className="bg-orange-500 hover:bg-orange-600 text-white py-2 font-semibold text-sm rounded w-fit px-4"
              
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-700 pt-4">
        © 2025 Unico Tattoo. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

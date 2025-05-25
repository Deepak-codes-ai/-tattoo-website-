import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_889cjj9", "template_ltzzmwt", form.current, "6Szbdea1LVlYrCxjh")
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset(); // clear the form after submission
        },
        (error) => {
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section id="contact">
    <div className="w-full bg-white min-h-screen bg-gradient-to-l from-gray-100 to-gray-300 text-gray-800 py-16 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold uppercase">
          Keep <span className="text-orange-500">In</span> Touch
        </h1>
        <p className="max-w-xl mx-auto mt-4 text-gray-600">
          Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor
          varius nulla, quis eu luctus eos est expedita.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {/* Contact Form */}
        <form ref={form} onSubmit={sendEmail} className="md:col-span-2 space-y-4">
          <input
            type="text"
            name="user_name"
            placeholder="Your name"
            className="w-full bg-white p-3 border border-gray-300 rounded"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your email"
            className="w-full bg-white p-3 border border-gray-300 rounded"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Your subject"
            className="w-full bg-white p-3 border border-gray-300 rounded"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows={6}
            className="w-full bg-white p-3 border border-gray-300 rounded"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-slate-700 hover:bg-gradient-to-r from-slate-800 to-orange-400 duration-500 text-white font-bold py-3 px-8 rounded-bl-2xl rounded-tr-2xl uppercase tracking-wide cursor-pointer"
          >
            Submit
          </button>
        </form>

        {/* Contact Info Panel */}
        <div className="bg-gray-900 text-white rounded shadow-md overflow-hidden">
          <div className="flex flex-col items-center p-6 border-b border-gray-700">
            <MapPin size={30} className="mb-2 text-orange-500" />
            <p className="text-center">
              1352 The Mall Road, <br />
              Kanpur U.P 208001
            </p>
          </div>

          <div className="bg-orange-500 p-6 text-center">
            <Mail size={30} className="mx-auto mb-2 text-white" />
            <p>dc789741@gmail.com</p>
            <p>inform123@gmail.com</p>
          </div>

          <div className="p-6 space-y-4">
            <div className="flex items-center gap-3">
              <Phone size={24} className="text-orange-400" />
              <div>
                <p>+91 902 6984 307</p>
                <p>+91 911 8841 881</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Clock size={24} className="text-orange-400" />
              <div>
                <p>Mon–Fri: 9am – 12pm</p>
                <p>Sat–Sun: 9am – 1pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Contact;

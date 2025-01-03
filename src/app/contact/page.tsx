import React from "react";
import Navbar from "../navbar/page";


const Contact = () => {
  return (
    <div>
<Navbar/>
      {/* Contact Page */}
      <section className="contact mt-20 lg:mt-0 py-12 bg-gray-50" id="contact">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-gray-800">
            Contact <span className="text-[#ea1b48]">Me</span>
          </h1>
          <p className="text-gray-600 mt-4">
            Feel free to get in touch with me. I'm always open to discussing new projects, creative ideas, or opportunities.
          </p>
        </div>

        <form action="" className="max-w-4xl mx-auto mt-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Input Fields */}
            <div className="flex flex-col w-full lg:w-1/2 gap-4">
              <input
                type="text"
                placeholder="Full Name..."
                className="w-full p-4 border rounded-md focus:ring-2 focus:ring-[#ea1b48] focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email..."
                className="w-full p-4 border rounded-md focus:ring-2 focus:ring-[#ea1b48] focus:outline-none"
              />
              <input
                type="number"
                placeholder="Phone Number..."
                className="w-full p-4 border rounded-md focus:ring-2 focus:ring-[#ea1b48] focus:outline-none"
              />
              <input
                type="text"
                placeholder="Subject..."
                className="w-full p-4 border rounded-md focus:ring-2 focus:ring-[#ea1b48] focus:outline-none"
              />
            </div>

            {/* Message Field */}
            <div className="flex flex-col w-full lg:w-1/2 gap-4">
              <textarea
                className="w-full h-40 p-4 border rounded-md focus:ring-2 focus:ring-[#ea1b48] focus:outline-none"
                placeholder="Your Message..."
              ></textarea>
              <button
                className="w-full py-3 bg-[#ea1b48] border-[#ea1b48] border-[2px] text-white rounded-md font-semibold hover:bg-white hover:border-[#ea1b48] hover:border-[2px] hover:text-black transition duration-300"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Contact;
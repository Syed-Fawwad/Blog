import React from "react";
import Navbar from "../navbar/page";


const Landing = () => {
  return (
    <div className="bg-[#f6f7f9] min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center mt-36 px-4">
        {/* Heading Section */}
        <div className="text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#ea1b48] leading-tight">
            Revolutionize Your Digital Experience
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-700">
            Explore the latest innovations, trends, and insights shaping the
            future of technology.
          </p>
        </div>

        {/* Features Section */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full px-4">
          {[
            {
              title: "Seamless Integration",
              description: "Connect with cutting-edge tools effortlessly.",
              icon: "🔗",
            },
            {
              title: "AI-Powered Insights",
              description: "Leverage artificial intelligence to stay ahead.",
              icon: "🤖",
            },
            {
              title: "Future-Proof Technology",
              description: "Innovate with trends shaping tomorrow.",
              icon: "🚀",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="text-4xl">{feature.icon}</div>
              <h3 className="text-xl font-bold mt-4">{feature.title}</h3>
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </div>
          ))}
        

        </div>
      </main>
    </div>
  );
};

export default Landing;
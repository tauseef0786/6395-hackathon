import React from "react";
import { useNavigate } from "react-router-dom";
import { FaRobot } from "react-icons/fa";
import hero1 from "../assets/hero1.png"; // Only using hero1
import Nutrition from "../components/Nutrition";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div
        className="min-h-screen flex flex-col justify-between items-center relative bg-cover bg-center"
        style={{
          backgroundImage: `url(${hero1})`,
          backgroundPosition: "center right 15%", // Center background image for all screens
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Content Wrapper */}
        <div className="absolute bottom-0 w-full px-6 sm:px-12 lg:px-16 lg:w-auto lg:bottom-10 lg:left-10 flex flex-col justify-center items-center sm:items-start text-center lg:text-left mb-16">
          {/* Title Section */}
          <div className="w-full mb-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-violet-600 "
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" }}>
              Ask nutrition query to<br/> Nutrition Specialist AI
            </h1>
          </div>

          {/* Buttons Section */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center sm:justify-start">
            <button
              className="px-6 py-3 text-lg bg-violet-600 text-white font-medium rounded-lg shadow-md flex items-center justify-center gap-2 hover:bg-violet-700 transition"
              onClick={() => navigate("/ai-with-image")}
            >
              <FaRobot className="text-white" /> Image to Response
            </button>
            <button
              className="px-8 py-3 text-lg bg-violet-600 text-white font-medium rounded-lg shadow-md flex items-center justify-center gap-2 hover:bg-violet-700 transition"
              onClick={() => navigate("/ai-with-text")}
            >
              <FaRobot className="text-white" /> Text to Response
            </button>
          </div>
        </div>
      </div>

      <Nutrition />
    </div>
  );
};

export default HomePage;

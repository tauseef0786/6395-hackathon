import React from "react";
import { useNavigate } from "react-router-dom";
import { FaRobot } from "react-icons/fa";
import hero from "../assets/hero.png";
import hero1 from "../assets/hero1.png";
import Nutrition from "../components/Nutrition";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div
        className="min-h-screen bg-cover bg-center flex flex-col justify-between items-center lg:justify-center mb-0 "
        style={{
          backgroundImage: `url(${hero})`,
          backgroundSize: "cover", // Ensure full coverage
          backgroundPosition: "center", // Center the image
          backgroundRepeat: "no-repeat", // Prevent tiling
        }}
      >
        {/* Desktop hero image */}
        <div
          className="hidden lg:block absolute inset-0 bg-cover bg-center "
          style={{
            backgroundImage: `url(${hero1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Content */}
        <div className="z-10 p-6 text-center lg:text-left w-full lg:max-w-lg">
          <h1 className="text-2xl lg:text-3xl font-bold text-violet-600 mb-4 mt-40 text-center">
            Ask your food nutrition query to Nutrition Specialist AI
          </h1>
        </div>

        {/* Buttons */}
        <div className="z-10 flex flex-col lg:flex-row gap-4 mb-6">
          <button
            className="px-4 py-2 text-sm lg:text-base bg-violet-600 text-white font-medium rounded-lg shadow-md flex items-center justify-center gap-2 hover:bg-violet-700 transition"
            onClick={() => navigate("/ai-with-image")}
          >
            <FaRobot className="text-white" /> Image to Response
          </button>
          <button
            className="px-4 py-2 text-sm lg:text-base bg-violet-600 text-white font-medium rounded-lg shadow-md flex items-center justify-center gap-2 hover:bg-violet-700 transition"
            onClick={() => navigate("/ai-with-text")}
          >
            <FaRobot className="text-white" /> Text to Response
          </button>
        </div>
      </div>
          <Nutrition/>

    </div>
  );
};

export default HomePage;

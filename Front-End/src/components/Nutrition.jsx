import React from "react";
import nutrition from "../assets/nutrition.png";
import nutrition1 from "../assets/nutrition1.png";

const Nutrition = () => {
  return (
    <div className="bg-gradient-to-b from-white to-blue-300">
      {/* Section 1 - The Importance of Nutritional Food */}
      <h2 className="text-3xl md:text-5xl text-center mt-24 font-bold text-violet-700 mb-4 px-4">
        The Importance of Nutritional Food
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-between px-6 py-12">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
          <img
            src={nutrition}
            alt="Healthy Nutrition"
            className="w-3/4 md:w-2/3"
          />
        </div>

        {/* Right Side - Information */}
        <div className="w-full md:w-1/2 px-4">
          <p className="text-gray-800 text-md md:text-lg leading-relaxed mb-4">
            Nutrition is crucial for maintaining health. A balanced diet provides essential nutrients like vitamins, minerals, and proteins necessary for energy and growth.
          </p>
          <p className="text-gray-800 text-md md:text-lg leading-relaxed mb-4">
            Managing calorie intake helps prevent health issues like obesity, diabetes, and deficiencies, ensuring overall well-being.
          </p>
          <p className="text-gray-800 text-md md:text-lg leading-relaxed">
            Prioritize a balanced diet to achieve a healthier lifestyle and reduce the risk of chronic diseases.
          </p>
        </div>
      </div>

      {/* Section 2 - Why We Should Keep Track of Our Calories and Nutrition */}
      <h2 className="text-2xl md:text-4xl text-center mt-16 mb-6 font-bold text-violet-700 px-4">
        Why We Should Keep Track of Our Calories and Nutrition
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-between px-6 py-12">
        {/* Left Side - Text */}
        <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0 order-2 md:order-1">
          <p className="text-gray-800 text-md md:text-lg leading-relaxed mb-4">
            Tracking calories and nutrition helps identify unhealthy eating habits and promotes better choices.
          </p>
          <p className="text-gray-800 text-md md:text-lg leading-relaxed mb-4">
            It ensures you meet nutritional needs while avoiding excess calorie consumption.
          </p>
          <p className="text-gray-800 text-md md:text-lg leading-relaxed">
            This habit supports weight management, energy levels, and overall health improvements.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-1/2 flex flex-col items-center order-1 md:order-2">
          <img
            src={nutrition1}
            alt="Track Nutrition"
            className="w-3/4 md:w-2/3"
          />
        </div>
      </div>
    </div>
  );
};

export default Nutrition;

import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import QRCode from "react-qr-code";

export default function CardDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const { dish } = location.state || {};

  if (!dish) {
    return (

      <div className="flex items-center justify-center min-h-screen bg-violet-100">
        <h1 className="text-2xl font-bold text-violet-700">No dish details available.</h1>

    
      </div>
    );
  }

  const qrCodeData = `
    Dish Name: ${dish.dishName}
    Total Calories: ${dish.dishCalories} cal
    Ingredients:
      ${dish.items.map(item => `${item.name}: ${item.quantity}`).join(', ')}
    Nutritional Values:
      Carbohydrates: ${dish.nutrients.carbohydrates}g
      Fats: ${dish.nutrients.fats}g
      Proteins: ${dish.nutrients.proteins}g
  `;

  return (

    <div className="min-h-screen bg-gradient-to-b from-violet-200 to-violet-500 p-8 flex flex-col items-center relative">
      {/* Back Button */}
      <button

        className="absolute top-4 left-8 sm:mb-4 bg-violet-600 text-white px-6 py-2 rounded-md shadow-lg hover:bg-violet-700 transition-all"

      
        onClick={() => navigate(-1)}
      >
        Back
      </button>


      <div className="flex flex-col sm:flex-row gap-8 w-full sm:w-3/4 md:w-2/3 lg:w-2/3">
        {/* Dish Details */}
        <div className="bg-white rounded-lg shadow-xl p-8 w-full sm:w-2/3 text-violet-700 flex flex-col items-start">
          <div className="w-full mb-6">
            <img
              className="w-full h-[250px] sm:h-[300px] object-cover rounded-lg" // Set consistent size for the images
              src={dish.image}
              alt={dish.dishName}
            />
          </div>
          <h1 className="text-3xl font-bold mb-4">{dish.dishName}</h1>
          <p className="text-lg mb-6">Total Calories: {dish.dishCalories} cal</p>
          
          <h2 className="text-2xl font-semibold mb-2">Ingredients:</h2>
          <ul className="list-disc ml-6 mb-6">
            {dish.items.map((item) => (
              <li key={item._id} className="mb-2">
                {item.name} ({item.quantity}): {item.caloriesPerUnit} cal each →{" "}
                {item.totalCalories} cal
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-semibold mt-4">Nutrients:</h2>
          <p>Carbohydrates: {dish.nutrients.carbohydrates}g</p>
          <p>Fats: {dish.nutrients.fats}g</p>
          <p>Proteins: {dish.nutrients.proteins}g</p>
        </div>

        {/* QR Code Section */}

        <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-1/3 flex justify-center items-center">

          <QRCode
            value={qrCodeData}
            size={250}
            bgColor="#ffffff"
            fgColor="#4B0082"  // Violet color for the QR Code

            level="Q"
            includeMargin={true}
          />
        </div>
      </div>
    </div>
  );
}

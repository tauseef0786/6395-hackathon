import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import QRCode from "react-qr-code";

export default function CardDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const { dish } = location.state || {};

  if (!dish) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-2xl font-bold">No dish details available.</h1>
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
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col sm:flex-row items-center justify-center">
      <button
        className="mb-4 bg-blue-500 text-white px-4 py-2 rounded self-start"
        onClick={() => navigate(-1)}
      >
        Back
      </button>
      <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col sm:flex-row gap-6 items-center">
        <div className="flex flex-col sm:flex-row items-center">
          <img
            className="w-full sm:w-1/2 h-[300px] sm:h-auto object-cover rounded-lg mb-4 sm:mb-0 sm:mr-6"
            src={dish.image}
            alt={dish.dishName}
          />
          <div>
            <h1 className="text-3xl font-bold mb-4">{dish.dishName}</h1>
            <p className="text-lg mb-4">Total Calories: {dish.dishCalories}</p>
            <h2 className="text-xl font-semibold mb-2">Items:</h2>
            <ul className="list-disc ml-6">
              {dish.items.map((item) => (
                <li key={item._id} className="mb-2">
                  {item.name} ({item.quantity}): {item.caloriesPerUnit} cal each →{" "}
                  {item.totalCalories} cal
                </li>
              ))}
            </ul>
            <h2 className="text-xl font-semibold mt-4">Nutrients:</h2>
            <p>Carbohydrates: {dish.nutrients.carbohydrates}g</p>
            <p>Fats: {dish.nutrients.fats}g</p>
            <p>Proteins: {dish.nutrients.proteins}g</p>
          </div>
        </div>
        <div className="mt-6 sm:mt-0 flex justify-center">
          <QRCode
            value={qrCodeData}
            size={250}
            bgColor="#ffffff"
            fgColor="#000000"
            level="Q"
            includeMargin={true}
          />
        </div>
      </div>
    </div>
  );
}

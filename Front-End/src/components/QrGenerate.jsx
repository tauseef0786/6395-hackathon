// components/QrGenerate.jsx
import React from 'react';
import QRCode from 'qrcode.react';

const QrGenerate = ({ data, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-xl relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
          <IoClose size={24} />
        </button>
        
        <h2 className="text-2xl font-bold mb-4 text-center">Dish Details</h2>
        <div className="flex items-center justify-center mb-6">
          {data && <QRCode value={`Dish: ${data.dishName}, Calories: ${data.calories}`} size={256} />}
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          <h3 className="text-lg font-semibold mb-2">Ingredients:</h3>
          {data && data.ingredients.map((ingredient, index) => (
            <span key={index} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
              {ingredient}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          <h3 className="text-lg font-semibold mb-2">Items:</h3>
          {data && data.items.map((item) => (
            <span key={item._id} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
              {item.name}: {item.quantity}
            </span>
          ))}
        </div>

        <p className="mt-4 text-gray-500">Nutrients: {data && data.nutrients}</p>
      </div>
    </div>
  );
};

export default QrGenerate;

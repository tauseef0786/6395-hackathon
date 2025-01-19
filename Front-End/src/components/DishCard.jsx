import React, { useState } from 'react';

const DishCard = ({ dishData }) => {
  const [items, setItems] = useState(dishData.items);

  const updateQuantity = (index, delta) => {
    const updatedItems = [...items];
    updatedItems[index].quantity += delta;
    setItems(updatedItems);
  };

  const totalCalories = items.reduce((total, item) => total + item.calories * item.quantity, 0);

  return (
    <div className="p-5 bg-white rounded-lg shadow-lg mt-5">
      <h2 className="text-2xl font-semibold">{dishData.dishName}</h2>
      <div className="space-y-3 mt-3">
        {items.map((item, index) => (
          <div key={index} className="flex justify-between items-center">
            <span>{item.name} ({item.quantity}): {item.calories * item.quantity} cal</span>
            <div className="flex space-x-2">
              <button onClick={() => updateQuantity(index, 1)} className="bg-green-500 text-white p-1 rounded">+</button>
              <button onClick={() => updateQuantity(index, -1)} className="bg-red-500 text-white p-1 rounded">-</button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 font-semibold">
        Total Calories: {totalCalories} cal
      </div>
    </div>
  );
};

export default DishCard;

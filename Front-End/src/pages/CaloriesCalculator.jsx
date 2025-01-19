// import React, { useState, useEffect } from 'react';
// import QRCode from 'react-qr-code';

// export default function CaloriesCalculator() {
//   const [dishes, setDishes] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredDishes, setFilteredDishes] = useState([]);
//   const [popupDish, setPopupDish] = useState(null);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await fetch('https://hacker-f1a7e-default-rtdb.firebaseio.com/dishes.json');
//         const data = await response.json();
//         if (data.dishdata) {
//           setDishes(data.dishdata);
//           setFilteredDishes(data.dishdata); // Set initial filtered dishes to show all data
//         }
//       } catch (error) {
//         console.error('Error fetching the data', error);
//       }
//     }

//     fetchData();
//   }, []);

//   useEffect(() => {
//     const result = dishes.filter(dish => 
//       dish.dishName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       dish.ingredients.some(ingredient => 
//         ingredient.toLowerCase().includes(searchTerm.toLowerCase())
//       )
//     );
//     setFilteredDishes(result);
//   }, [searchTerm, dishes]);

//   const openPopup = (dish) => {
//     setPopupDish(dish);
//   };

//   const closePopup = () => {
//     setPopupDish(null);
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl font-bold mb-8 text-center">Dish List</h1>

//       <div className="mb-6 flex justify-center">
//         <input
//           type="text"
//           placeholder="Search for dishes..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="border border-gray-300 rounded px-4 py-2 w-full max-w-md"
//         />
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {filteredDishes.map((dish) => (
//           <div 
//             key={dish._id} 
//             className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 transform hover:scale-105 cursor-pointer"
//             onClick={() => openPopup(dish)}
//           >
//             <div className="aspect-w-16 aspect-h-9">
//               <img 
//                 className="w-full h-auto object-cover" 
//                 src={dish.image} 
//                 alt={dish.dishName} 
//                 loading="lazy" 
//               />
//             </div>
//             <div className="p-4">
//               <h2 className="text-xl font-semibold mb-2">{dish.dishName}</h2>
//               <p className="text-gray-700 mb-4">Calories: {dish.calories}</p>
              
//               <h3 className="text-lg font-semibold mb-2">Ingredients:</h3>
//               <div className="flex flex-wrap gap-2 mb-4">
//                 {dish.ingredients.map((ingredient, index) => (
//                   <span key={index} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
//                     {ingredient}
//                   </span>
//                 ))}
//               </div>

//               <h3 className="text-lg font-semibold mb-2">Items:</h3>
//               <div className="flex flex-wrap gap-2">
//                 {dish.items.map((item) => (
//                   <span key={item._id} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
//                     {item.name}: {item.quantity}
//                   </span>
//                 ))}
//               </div>

//               <p className="mt-4 text-gray-500">Nutrients: {dish.nutrients}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Popup Modal */}
//       {popupDish && (
//         <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
//           <div className="bg-white p-6 rounded-lg max-w-lg w-full shadow-lg relative">
//             <button 
//               className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" 
//               onClick={closePopup}
//             >
//               ×
//             </button>
//             <div className="flex justify-center mt-4">
//               <QRCode 
//                 value={`Dish Name: ${popupDish.dishName}, Calories: ${popupDish.calories}, Ingredients: ${popupDish.ingredients.join(", ")}`} 
//                 size={250}
//                 bgColor="#ffffff"
//                 fgColor="#000000"
//                 level="Q"
//                 includeMargin={true}
//               />
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function CaloriesCalculator() {
  const [dishes, setDishes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredDishes, setFilteredDishes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://hacker-f1a7e-default-rtdb.firebaseio.com/dishes2.json"
        );
        const data = await response.json();
        if (data) {
          setDishes(data);
          setFilteredDishes(data);
        }
      } catch (error) {
        console.error("Error fetching the data", error);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    const result = dishes.filter((dish) =>
      dish.dishName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredDishes(result);
  }, [searchTerm, dishes]);

  const handleCardClick = (dish) => {
    navigate("/details/" + dish._id, { state: { dish } });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center">Dish List</h1>

      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search for dishes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 w-full max-w-md"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredDishes.map((dish) => (
          <div
            key={dish._id}
            className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 transform hover:scale-105 cursor-pointer"
            onClick={() => handleCardClick(dish)}
          >
            <div className="aspect-w-16 aspect-h-9">
              <img
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                src={dish.image}
                alt={dish.dishName}
                loading="lazy"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{dish.dishName}</h2>
              <p className="text-gray-700 mb-4">
                Total Calories: {dish.dishCalories}
              </p>
              <h3 className="text-lg font-semibold mb-2">Items:</h3>
              <div className="flex flex-wrap gap-2">
                {dish.items.map((item) => (
                  <span
                    key={item._id}
                    className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm"
                  >
                    {item.name}: {item.quantity}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

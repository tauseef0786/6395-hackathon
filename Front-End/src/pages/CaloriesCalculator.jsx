
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// export default function CaloriesCalculator() {
//   const [dishes, setDishes] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredDishes, setFilteredDishes] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await fetch(
//           "https://hacker-f1a7e-default-rtdb.firebaseio.com/dishes2.json"
//         );
//         const data = await response.json();
//         if (data) {
//           setDishes(data);
//           setFilteredDishes(data);
//         }
//       } catch (error) {
//         console.error("Error fetching the data", error);
//       }
//     }

//     fetchData();
//   }, []);

//   useEffect(() => {
//     const result = dishes.filter((dish) =>
//       dish.dishName.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredDishes(result);
//   }, [searchTerm, dishes]);

//   const handleCardClick = (dish) => {
//     navigate("/details/" + dish._id, { state: { dish } });
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
//             onClick={() => handleCardClick(dish)}
//           >
//             <div className="aspect-w-16 aspect-h-9">
//               <img
//                 className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
//                 src={dish.image}
//                 alt={dish.dishName}
//                 loading="lazy"
//               />
//             </div>
//             <div className="p-4">
//               <h2 className="text-xl font-semibold mb-2">{dish.dishName}</h2>
//               <p className="text-gray-700 mb-4">
//                 Total Calories: {dish.dishCalories}
//               </p>
//               <h3 className="text-lg font-semibold mb-2">Items:</h3>
//               <div className="flex flex-wrap gap-2">
//                 {dish.items.map((item) => (
//                   <span
//                     key={item._id}
//                     className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm"
//                   >
//                     {item.name}: {item.quantity}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function CaloriesCalculator() {
  const [dishes, setDishes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredDishes, setFilteredDishes] = useState([]);
  const [sortOption, setSortOption] = useState("dishName"); // Sorting state
  const [currentPage, setCurrentPage] = useState(1); // Pagination state
  const [itemsPerPage, setItemsPerPage] = useState(12); // Items per page
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
    // Apply search on all dishes
    const searchResult = dishes.filter((dish) =>
      dish.dishName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Sort based on selected option
    const sortedResult = [...searchResult].sort((a, b) => {
      if (sortOption === "dishName") {
        return a.dishName.localeCompare(b.dishName);
      } else if (sortOption === "dishCalories") {
        return a.dishCalories - b.dishCalories;
      }
      return 0;
    });

    setFilteredDishes(sortedResult);
  }, [searchTerm, sortOption, dishes]);

  // Pagination
  const indexOfLastDish = currentPage * itemsPerPage;
  const indexOfFirstDish = indexOfLastDish - itemsPerPage;
  const currentDishes = filteredDishes.slice(
    indexOfFirstDish,
    indexOfLastDish
  );

  const handleCardClick = (dish) => {
    navigate("/details/" + dish._id, { state: { dish } });
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(filteredDishes.length / itemsPerPage);

  return (
    <div className="p-6 bg-white min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center text-violet-900">Dish List</h1>

      <div className="mb-6 flex justify-between items-center">
        <input
          type="text"
          placeholder="Search for dishes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 w-full max-w-md"
        />

        <select
          value={sortOption}
          onChange={handleSortChange}
          className="ml-4 border border-gray-300 rounded px-4 py-2"
        >
          <option value="dishName">Sort by Name</option>
          <option value="dishCalories">Sort by Calories</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentDishes.map((dish) => (
          <div
            key={dish._id}
            className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 transform hover:scale-105 cursor-pointer"
            onClick={() => handleCardClick(dish)}
          >
            <div className="aspect-w-16 aspect-h-9">
            <div className="w-full mb-6">
            <img
              className="w-full h-[250px] sm:h-[300px] object-cover rounded-lg" // Set consistent size for the images
              src={dish.image}
              alt={dish.dishName}
            />
          </div>
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 text-violet-900">{dish.dishName}</h2>
              <p className="text-violet-900 mb-4">
                Total Calories: {dish.dishCalories}
              </p>
              <h3 className="text-lg font-semibold mb-2 text-violet-900">Items:</h3>
              <div className="flex flex-wrap gap-2">
                {dish.items.map((item) => (
                  <span
                    key={item._id}
                    className="bg-violet-100 text-violet-900 px-3 py-1 rounded-full text-sm"
                  >
                    {item.name}: {item.quantity}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-6 flex justify-center space-x-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`px-4 py-2 ${
              currentPage === index + 1
                ? "bg-violet-600 text-white"
                : "bg-gray-200 text-violet-900"
            } rounded-full`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import QRCode from 'react-qr-code';

const CalorieIntake = () => {
  const [calorieNeeds, setCalorieNeeds] = useState('');

  const handleCalculate = (event) => {
    event.preventDefault();
    const age = event.target.age.value;
    const weight = event.target.weight.value;
    const height = event.target.height.value;
    const activityLevel = event.target.activityLevel.value;

    // Simple Basal Metabolic Rate (BMR) calculation formula:
    // BMR for men = 10 * weight + 6.25 * height - 5 * age + 5
    // BMR for women = 10 * weight + 6.25 * height - 5 * age - 161
    const gender = event.target.gender.value; // Assume 'male' or 'female'
    let bmr = 0;

    if (gender === 'male') {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else if (gender === 'female') {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    // Calculate Total Daily Energy Expenditure (TDEE) based on activity level
    const activityMultipliers = {
      sedentary: 1.2,
      lightly_active: 1.375,
      moderately_active: 1.55,
      very_active: 1.725,
      super_active: 1.9,
    };

    const tdee = bmr * activityMultipliers[activityLevel];
    setCalorieNeeds(Math.round(tdee)); // Rounded calorie needs

    event.target.reset();
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Calories Calculator</h1>
      <p className="mb-6">Calculate your daily calorie needs.</p>

      <form onSubmit={handleCalculate} className="bg-white p-6 rounded shadow">
        <div className="mb-4">
          <label htmlFor="gender" className="block text-gray-700">Gender:</label>
          <select id="gender" name="gender" className="mt-1 block w-full border rounded">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="age" className="block text-gray-700">Age:</label>
          <input type="number" id="age" name="age" className="mt-1 block w-full border rounded" required />
        </div>

        <div className="mb-4">
          <label htmlFor="weight" className="block text-gray-700">Weight (kg):</label>
          <input type="number" id="weight" name="weight" className="mt-1 block w-full border rounded" required />
        </div>

        <div className="mb-4">
          <label htmlFor="height" className="block text-gray-700">Height (cm):</label>
          <input type="number" id="height" name="height" className="mt-1 block w-full border rounded" required />
        </div>

        <div className="mb-4">
          <label htmlFor="activityLevel" className="block text-gray-700">Activity Level:</label>
          <select id="activityLevel" name="activityLevel" className="mt-1 block w-full border rounded">
            <option value="sedentary">Sedentary</option>
            <option value="lightly_active">Lightly Active</option>
            <option value="moderately_active">Moderately Active</option>
            <option value="very_active">Very Active</option>
            <option value="super_active">Super Active</option>
          </select>
        </div>

        <button type="submit" className="bg-violet-700 text-white py-2 px-4 rounded hover:bg-violet-800">
          Calculate
        </button>
      </form>

      {calorieNeeds && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-2">Your Daily Calorie Needs:</h2>
          <p className="text-lg">Estimated Calorie Intake: {calorieNeeds} kcal</p>
          <div className="mt-4">
            <QRCode value={`Estimated Calorie Intake: ${calorieNeeds} kcal`} size={128} />
          </div>
        </div>
      )}
    </div>
  );
};

export default CalorieIntake;

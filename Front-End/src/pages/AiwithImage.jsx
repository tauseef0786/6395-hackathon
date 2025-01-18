import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { getBase64 } from "../helpers/image-Helper";

const AiwithImage = () => {
  const genAI = new GoogleGenerativeAI("AIzaSyBVGsZc-vdZuU9zS6dculPS0ZFh0905k2c");

  const [image, setImage] = useState(null);
  const [imageInlineData, setImageInlineData] = useState("");
  const [aiResponse, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const processNutritionData = (responseText) => {
    const nutritionData = [];
    const lines = responseText.split("\n");

    lines.forEach((line) => {
      if (line.includes("Calories") || line.includes("Protein") || line.includes("Fat") || line.includes("Carbs")) {
        const columns = line.split(":");
        nutritionData.push({ nutrient: columns[0].trim(), value: columns[1]?.trim() });
      }
    });

    return nutritionData;
  };

  const aiImageRun = async () => {
    setLoading(true);
    setResponse(null);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `Analyze the provided image of food and:
    1. Identify the food item (e.g., banana, pizza, salad, etc.).
    2. Provide nutritional values per 100 grams of the food item.
    3. If the food is a category (e.g., pizza), list different types with their nutritional values per 100 grams.`;
    
    try {
      const result = await model.generateContent([prompt, imageInlineData]);
      const response = await result.response;
      const text = await response.text();

      const nutritionData = processNutritionData(text);
      setResponse(nutritionData);
    } catch (error) {
      console.error("Error fetching AI response:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    getBase64(file)
      .then((result) => setImage(result))
      .catch((e) => console.log(e));

    fileToGenerativePart(file).then((image) => setImageInlineData(image));
  };

  const fileToGenerativePart = async (file) => {
    const base64EncodedDataPromise = new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result.split(",")[1]);
      reader.readAsDataURL(file);
    });

    return { inlineData: { data: await base64EncodedDataPromise, mimeType: file.type } };
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-20 pt-16">
      <div className="w-full max-w-6xl px-4 mt-32 gap-8 flex flex-col md:flex-row">
        {/* Left side - Image upload and analyzer card */}
        <div className="w-full md:w-1/3 p-6 shadow-lg bg-violet-400 rounded-lg mb-8 md:mb-0">
          <div className="flex flex-col items-center">
            <input
              type="file"
              onChange={handleImageChange}
              className="mb-4 p-2 text-purple-600 border border-purple-300 rounded-lg"
            />
            <button
              className="px-4 py-2 bg-purple-600 text-white font-bold rounded-lg shadow-lg hover:bg-purple-700"
              onClick={aiImageRun}
              disabled={loading || !image}
            >
              {loading ? "Processing..." : "Analyze Image"}
            </button>
          </div>

          {image && (
            <img
              src={image}
              className="w-full mt-4 rounded-lg"
              alt="Uploaded Preview"
            />
          )}
        </div>

        {/* Right side - AI response and nutritional data */}
        <div className="w-full md:w-2/3 p-6 bg-green-400 shadow-lg rounded-lg">
          {loading && !aiResponse && (
            <div className="flex items-center justify-center h-64">
              <div className="animate-spin rounded-full h-16 w-16 border-8 border-t-4 border-b-violet-600 border-opacity-90"></div>
            </div>
          )}

          {aiResponse && (
            <>
              <h2 className="text-lg font-semibold text-purple-600 mb-2">Nutritional Information:</h2>
              <table className="table-auto w-full border-collapse mb-6">
                <thead>
                  <tr>
                    <th className="border p-2 text-left">Nutrient</th>
                    <th className="border p-2 text-left">Value per 100g</th>
                  </tr>
                </thead>
                <tbody>
                  {aiResponse.length > 0 ? (
                    aiResponse.map((row, index) => (
                      <tr key={index}>
                        <td className="border p-2">{row.nutrient}</td>
                        <td className="border p-2">{row.value}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="2" className="border p-2 text-center text-gray-500">
                        No nutritional data available for this food.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>

              <p className="text-gray-700">
                Based on the analysis, this food item provides a healthy source of essential nutrients. For example, bananas are rich in potassium and dietary fiber, making them excellent for heart health and digestion. The exact nutritional value will depend on factors such as the size of the portion and ripeness. For pizzas, each type may vary in terms of calories, fat content, and other nutrients, so it's important to check individual varieties.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AiwithImage;

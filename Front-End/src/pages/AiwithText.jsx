import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const AiWithText = () => {
  const genAI = new GoogleGenerativeAI("AIzaSyBVGsZc-vdZuU9zS6dculPS0ZFh0905k2c");

  const [search, setSearch] = useState("");
  const [aiResponse, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  /**
   * Call Generative AI to fetch text insights
   */
  async function aiRun() {
    setLoading(true);
    setResponse("");
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = `random meals related to ${search} category with images and prices`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    setResponse(text);
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
      <div className="bg-gray-50 rounded-lg shadow-lg p-8 max-w-lg w-full">
        <h1 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          AI-Powered Food Search
        </h1>
        <div className="flex items-center gap-4 mb-6">
          <input
            type="text"
            placeholder="Search Food by Category"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <button
            onClick={aiRun}
            className="px-6 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
          >
            Search
          </button>
        </div>

        {loading && !aiResponse ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : aiResponse ? (
          <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <p className="text-gray-800 whitespace-pre-wrap">{aiResponse}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default AiWithText;

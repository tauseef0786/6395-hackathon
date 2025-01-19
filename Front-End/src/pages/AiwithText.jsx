import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const NutritionistChat = () => {
  const genAI = new GoogleGenerativeAI("AIzaSyBVGsZc-vdZuU9zS6dculPS0ZFh0905k2c");

  const [userQuery, setUserQuery] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  /**
   * Handles user query and fetches the AI response.
   */
  const handleQuery = async () => {
    if (!userQuery.trim()) return;

    setLoading(true);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = `You are a professional nutritionist. Answer the following query concisely and professionally: ${userQuery}`;

    try {
      const result = await model.generateContent(prompt);
      const response = (await result.response.text()).trim();

      setChatHistory((prev) => [
        ...prev,
        { type: "user", text: userQuery },
        { type: "ai", text: response },
      ]);
    } catch (error) {
      setChatHistory((prev) => [
        ...prev,
        { type: "user", text: userQuery },
        { type: "ai", text: "I'm sorry, I couldn't process your query. Please try again." },
      ]);
    }

    setUserQuery("");
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r flex items-center justify-center p-6">
      {/* Left Image */}
      <div className="absolute left-6 top-1/2 transform -translate-y-1/2">
        <img src="/assets/nutritionist.png" alt="Nutritionist" className="w-48 h-auto rounded-lg shadow-md" />
      </div>

      {/* Chat Box */}
      <div className="bg-white rounded-lg shadow-xl p-4 w-96 max-h-[32rem] flex flex-col fixed right-6 top-1/2 transform -translate-y-1/2 border border-violet-300">
        <h1 className="text-2xl font-bold text-violet-800 text-center mb-4">
          Nutritionist GPT
        </h1>
        <div className="flex-grow overflow-y-auto mb-4 p-3 bg-violet-50 rounded-lg shadow-inner">
          {chatHistory.map((entry, index) => (
            <div
              key={index}
              className={`flex ${entry.type === "user" ? "justify-end" : "justify-start"} mb-3`}
            >
              <div
                className={`max-w-xs p-3 rounded-xl ${
                  entry.type === "user"
                    ? "bg-violet-600 text-white"
                    : "bg-violet-200 text-violet-800"
                } shadow-md`}
              >
                <p className="text-sm">{entry.text}</p>
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start mb-3">
              <div className="bg-violet-200 text-violet-800 p-3 rounded-xl max-w-xs shadow-md">
                <p className="text-sm">Typing...</p>
              </div>
            </div>
          )}
        </div>
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Ask about nutrition..."
            value={userQuery}
            onChange={(e) => setUserQuery(e.target.value)}
            className="flex-grow px-4 py-2 border border-violet-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 text-violet-800"
          />
          <button
            onClick={handleQuery}
            disabled={loading}
            className="px-4 py-2 bg-violet-600 text-white font-semibold rounded-lg hover:bg-violet-700 transition focus:outline-none focus:ring-2 focus:ring-violet-500"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default NutritionistChat;
import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import boxbg from "../assets/boxbg.png";
import robo2 from "../assets/robo2.mp4"; // Example video file

const NutritionistChat = () => {
  const genAI = new GoogleGenerativeAI("AIzaSyBVGsZc-vdZuU9zS6dculPS0ZFh0905k2c");

  const [userQuery, setUserQuery] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);

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
    <div className="min-h-screen flex items-center justify-between bg-gradient-to-b from-white to-indigo-900 px-16">
      {/* Left Side: Video and Text in One Container */}
      <div className="w-full sm:w-[40%] md:w-[50%] flex flex-col justify-center items-center bg-white rounded-lg border border-violet-300 ">
        {/* Top: Video */}
        <div className="w-full flex justify-center">
          <video
            src={robo2}
            autoPlay
            loop
            muted
            className="h-34 w-28 rounded-lg mt-10"
          />
        </div>

        {/* Bottom: Text with White Background */}
        <div className="w-full bg-white text-center p-6 rounded-lg">
          <p className="text-md text-violet-800">
            Meet our AI-powered nutritionist! It’s designed to assist you in
            making informed, healthy dietary choices. This Gen AI model is
            equipped with a deep understanding of nutrition and can provide
            professional answers to all your nutrition-related queries.
          </p>
        </div>
      </div>

      {/* Right Side: Chat Box */}
      <div
        className="bg-white rounded-lg shadow-xl p-6 w-[40rem] max-h-[30rem] flex flex-col border border-violet-300 m-6"
        style={{
          backgroundImage: `url(${boxbg})`,
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="backdrop-blur-sm backdrop-saturate-150 bg-white/50 m-2 p-2">
          <h1 className="text-2xl font-bold text-violet-800 text-center">
            Nutritionist Gen AI Model
          </h1>
        </div>
        <div className="flex-grow overflow-y-auto mb-4 bg-violet-50 rounded-lg shadow-inner p-10">
          {chatHistory.map((entry, index) => (
            <div
              key={index}
              className={`flex ${
                entry.type === "user" ? "justify-end" : "justify-start"
              } mb-3`}
            >
              <div
                className={`max-w-xl p-3 rounded-xl ${
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
        <div className="flex items-center gap-2 pt-4">
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

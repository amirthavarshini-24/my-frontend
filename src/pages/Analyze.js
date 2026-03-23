import { useState } from "react";
import { Send } from "lucide-react";

export default function Analyze() {

  const [text, setText] = useState("");
  const [lang, setLang] = useState("English");
  const [result, setResult] = useState("");

  const analyze = async () => {

    if (!text.trim()) return;

    try {

      const response = await fetch("https://my-backend-h18l.onrender.com/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: text,
          language: lang
        }),
      });

      const textData = await response.text();

      let data;

      try {
        data = JSON.parse(textData);
      } catch {
        console.error("Not JSON:", textData);
        throw new Error("Invalid response");
      }

      console.log("API:", data);

      const value = data.prediction;

      if (value === "toxic") {
        setResult("❌ Toxic Comment");
      } else if (value === "non_toxic") {
        setResult("✅ Non-Toxic Comment");
      } else {
        setResult("⚠ Unknown Result");
      }

    } catch (error) {
      console.error(error);
      setResult("⚠ Server waking up / Try again");
    }

  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-900">

      <div className="w-full max-w-3xl bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">

        <h1 className="text-4xl font-bold text-white text-center mb-2">
          Comment Analyzer
        </h1>

        <p className="text-center text-gray-300 mb-6">
          Smart Toxicity Detection System
        </p>

        <div className="flex justify-center gap-3 mb-6">

          {["English", "Hindi", "Malayalam", "Mixed"].map((l) => (

            <button
              key={l}
              onClick={() => setLang(l)}
              className={`px-4 py-2 rounded-full text-sm font-semibold ${
                lang === l
                  ? "bg-blue-600 text-white"
                  : "bg-gray-700 text-gray-300"
              }`}
            >
              {l}
            </button>

          ))}

        </div>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type your comment here..."
          rows="5"
          className="w-full bg-gray-900/70 text-white p-4 rounded-xl"
        />

        <div className="flex justify-between text-sm text-gray-400 mt-2 mb-5">
          <span>Language: {lang}</span>
          <span>{text.length} chars</span>
        </div>

        <button
          onClick={analyze}
          className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-white bg-gradient-to-r from-blue-500 to-green-500"
        >
          <Send size={18} />
          Analyze Comment
        </button>

        {result && (
          <div className="mt-6 text-center text-xl font-bold text-white">
            {result}
          </div>
        )}

      </div>

    </div>

  );
}
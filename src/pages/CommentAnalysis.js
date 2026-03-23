import { useState } from "react";
import {
  Send,
  Loader2,
  AlertTriangle,
  CheckCircle,
  Sparkles,
} from "lucide-react";

export default function CommentAnalysis() {
  const [text, setText] = useState("");
  const [language, setLanguage] = useState("English");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const analyzeText = () => {
    if (!text.trim()) return;

    setLoading(true);

    setTimeout(() => {
      const toxicWords = ["idiot", "stupid", "hate", "dumb", "trash"];

      const isToxic = toxicWords.some(word =>
        text.toLowerCase().includes(word)
      );

      setResult({
        toxic: isToxic,
        confidence: isToxic
          ? Math.floor(Math.random() * 10 + 85)
          : Math.floor(Math.random() * 20 + 10),

        suggestion: isToxic
          ? "Please consider expressing your thoughts respectfully."
          : null,
      });

      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-black flex justify-center items-center px-4">

      <div className="w-full max-w-3xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8">

        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-white">
            AI Comment Analyzer
          </h1>

          <p className="text-gray-400 mt-2">
            Smart Toxicity Detection System
          </p>
        </div>

        {/* Language Buttons */}
        <div className="flex justify-center gap-3 mb-5">
          {["English", "Hindi", "Malayalam", "Mixed"].map((lang) => (
            <button
              key={lang}
              onClick={() => setLanguage(lang)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                language === lang
                  ? "bg-blue-600 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              {lang}
            </button>
          ))}
        </div>

        {/* Text Box */}
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type your comment here..."
          className="w-full h-36 bg-gray-800 border border-gray-600 rounded-xl p-4 text-white resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="flex justify-between text-sm text-gray-400 mt-2">
          <span>Language: {language}</span>
          <span>{text.length} chars</span>
        </div>

        {/* Analyze Button */}
        <button
          onClick={analyzeText}
          disabled={loading}
          className="w-full mt-5 bg-gradient-to-r from-blue-600 to-green-600 text-white py-3 rounded-xl font-semibold hover:scale-105 transition"
        >
          {loading ? (
            <div className="flex justify-center gap-2">
              <Loader2 className="animate-spin" />
              Analyzing...
            </div>
          ) : (
            <div className="flex justify-center gap-2">
              <Send />
              Analyze Comment
            </div>
          )}
        </button>

        {/* Result */}
        {result && (
          <div className="mt-6 space-y-4">

            <div
              className={`p-5 rounded-xl border ${
                result.toxic
                  ? "bg-red-500/10 border-red-500"
                  : "bg-green-500/10 border-green-500"
              }`}
            >
              <div className="flex items-center gap-2 mb-2">

                {result.toxic ? (
                  <AlertTriangle className="text-red-500" />
                ) : (
                  <CheckCircle className="text-green-500" />
                )}

                <h2 className="text-white font-bold text-lg">
                  {result.toxic ? "Toxic Detected" : "Non-Toxic"}
                </h2>
              </div>

              <p className="text-gray-300 mb-2">
                Confidence: {result.confidence}%
              </p>

              <div className="h-3 bg-gray-700 rounded-full overflow-hidden">

                <div
                  className={`h-full ${
                    result.toxic ? "bg-red-500" : "bg-green-500"
                  }`}
                  style={{ width: `${result.confidence}%` }}
                />

              </div>
            </div>

            {/* Suggestion */}
            {result.toxic && (
              <div className="p-4 bg-indigo-500/10 border border-indigo-400 rounded-xl">

                <div className="flex gap-2 mb-1">
                  <Sparkles className="text-indigo-400" />

                  <h3 className="text-white font-semibold">
                    Suggested Rewrite
                  </h3>
                </div>

                <p className="text-gray-300 text-sm">
                  {result.suggestion}
                </p>
              </div>
            )}

          </div>
        )}

      </div>
    </div>
  );
}

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [domain, setDomain] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!domain.trim()) return alert("Please enter a domain");

    setLoading(true);
    try {
      const res = await fetch("http://127.0.0.1:8000/recommend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ domain, content }),
      });
      const data = await res.json();

      navigate("/results", {
        state: { domain, content, recommendation: data.recommendation },
      });
    } catch (error) {
      alert("⚠️ Failed to fetch recommendation from backend");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center w-full">
      <div className="w-full px-3 sm:px-4">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
          <div className="space-y-3 md:space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              Smart Ad Placement
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-prose">
              Enter your business domain and content. We’ll recommend the best
              platform for your advertisement based on current market demand.
            </p>
          </div>

          <div className="bg-white/90 rounded-2xl shadow-lg border border-gray-200 p-4 sm:p-6 md:p-8">
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Domain
                </label>
                <input
                  type="text"
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                  placeholder="e.g., Education, Fitness, Tech"
                  className="w-full rounded-xl border border-gray-300 bg-white px-3 sm:px-4 py-2.5 text-gray-900 placeholder:text-gray-400 shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Ad Content
                </label>
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Write a short description for your ad"
                  className="w-full h-32 rounded-xl border border-gray-300 bg-white px-3 sm:px-4 py-2.5 text-gray-900 placeholder:text-gray-400 shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition resize-y"
                />
              </div>

              <div className="flex items-center justify-end">
                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-4 sm:px-5 py-2.5 font-medium shadow-sm hover:shadow transition-all active:scale-[.99] w-full sm:w-auto disabled:opacity-50"
                >
                  {loading ? "Loading..." : "Get Recommendation"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;

import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Results() {
  const location = useLocation();
  const navigate = useNavigate();
  const { domain, content, recommendation } = location.state || {};

  // If user opens /results directly without submitting
  useEffect(() => {
    if (!domain || !recommendation) {
      navigate("/"); // redirect back to home
    }
  }, [domain, recommendation, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-lg border border-gray-200 p-6 sm:p-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Recommended Platforms
        </h1>

        <p className="text-gray-600 mb-6">
          Based on your domain <span className="font-semibold">{domain}</span>{" "}
          and content, here’s where your ad will perform best:
        </p>

        <div className="bg-blue-50 border border-blue-200 text-blue-800 rounded-xl p-4 text-lg font-medium shadow-sm">
          {recommendation}
        </div>
      </div>
    </div>
  );
}

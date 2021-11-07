import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen">
      <div className="p-10 m-auto bg-white rounded-xl shadow-lg">
        <div className="space-y-0.5">
          <p className="text-center text-6xl font-medium text-green-500">404</p>
          <p className="text-center text-3xl font-medium">Page Not Found</p>
        </div>
        <div className="flex justify-center">
          <button
            onClick={() => navigate(-1)}
            className="mt-3 py-2 px-4 font-semibold rounded-xl shadow-md text-white bg-green-500 hover:bg-green-700"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}

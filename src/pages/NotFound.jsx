import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen flex items-center justify-center flex-col gap-4">
      <h1 className="text-2xl">404, page Not found</h1>
      <button
        onClick={() => navigate("/")}
        className="border px-3 py-2 rounded"
      >
        Back
      </button>
    </div>
  );
};

export default NotFound;

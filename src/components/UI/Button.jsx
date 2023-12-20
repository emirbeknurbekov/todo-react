import React from "react";

const button = ({ children }) => {
  return (
    <button className="w-full border text-sm border-white rounded-lg p-1 pointer text-white transition hover:bg-gray-800">
      {children}
    </button>
  );
};

export default button;

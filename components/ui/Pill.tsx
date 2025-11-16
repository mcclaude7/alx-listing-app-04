// components/ui/Pill.tsx
import React from "react";
import { PillProps } from "@/interfaces";

const Pill: React.FC<PillProps> = ({ label, onClick, active = false }) => {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1 rounded-full text-sm border ${
        active ? "bg-indigo-600 text-white border-indigo-600" : "bg-white text-gray-700 border-gray-200"
      }`}
    >
      {label}
    </button>
  );
};

export default Pill;

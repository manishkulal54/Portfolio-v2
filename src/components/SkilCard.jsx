import { useState } from "react";

export default function SkillCard({ skill, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group cursor-pointer transform transition-all duration-300 hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
      <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4 text-center">
        <div className="text-2xl mb-2">{skill.icon}</div>
        <h4 className="text-white font-semibold">{skill.name}</h4>
        <div className="mt-2 h-2 bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000 ease-out"
            style={{ width: isHovered ? skill.amount + "%" : "0%" }}
          />
        </div>
      </div>
    </div>
  );
}

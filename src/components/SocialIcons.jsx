import React from "react";
import { socials } from "../data";

export default function SocialIcons({ isMailVisible }) {
  return (
    <div className="flex justify-center lg:justify-start space-x-6 pt-4">
      {socials.map((social, index) =>
        social.name === "Email" && !isMailVisible ? null : (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-gray-800/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-all duration-300 hover:scale-110 group"
          >
            <social.icon className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-300" />
          </a>
        )
      )}
    </div>
  );
}

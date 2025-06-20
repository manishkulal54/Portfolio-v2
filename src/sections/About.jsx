import React from "react";
import { aboutMe } from "../data";

export default function About() {
  return (
    <>
      <section className="py-24 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </h3>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/30 rounded-3xl p-8 md:p-12 text-center">
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
              {aboutMe}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-semibold">
                &nbsp;I craft digital solutions that are not just functional,
                but truly exceptional.
              </span>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

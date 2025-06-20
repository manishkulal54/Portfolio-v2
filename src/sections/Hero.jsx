import { Github, Linkedin, Mail, Star, Zap } from "lucide-react";
import profilePic from "../assets/profile.jpg";
import SocialIcons from "../components/SocialIcons";
import Typewriter from "typewriter-effect";
import { heroStrings, quote, socials } from "../data";

export default function Hero({ isLoaded }) {
  return (
    <>
      <section className="min-h-screen flex items-center justify-center px-6 md:px-20 relative">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className={`space-y-8 text-center lg:text-left transition-all duration-1000 order-1 lg:order-1 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start space-x-2 mb-4">
                <Star className="w-6 h-6 text-yellow-400" />
                <span className="text-gray-300 font-medium">
                  Available for new opportunities
                </span>
              </div>
              <h1 className="text-6xl md:text-7xl font-black leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                  Manish
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-light text-gray-300">
                <Typewriter
                  options={{
                    strings: heroStrings,
                    autoStart: true,
                    loop: true,
                    delay: 100,
                  }}
                />
              </h2>
            </div>

            <p className="text-xl text-gray-400 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              {quote}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                className="flex justify-center bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold px-8 py-4 rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 "
              >
                <Zap className="w-5 h-5 mr-2" />
                View My Work
              </a>
              <a
                variant="outline"
                href={socials.find((social) => social.name === "Email").url}
                className="border-2 border-gray-600 text-white hover:bg-white hover:text-black font-semibold px-8 py-4 rounded-xl backdrop-blur-sm transition-all duration-300 cursor-pointer"
              >
                Contact Me
              </a>
            </div>

            <SocialIcons isMailVisible={false} />
          </div>

          <div
            className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 order-2 lg:order-2 ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative">
              <div className="w-100 h-100 rounded-full bg-gradient-to-r from-blue-500 via-purple-600 to-cyan-500 p-1">
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                  <div className="w-90 h-90 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-6xl font-bold text-white shadow-2xl overflow-hidden">
                    <img
                      src={profilePic}
                      alt=""
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
              </div>
              {/* <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

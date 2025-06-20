import { Mail } from "lucide-react";
import React from "react";

export default function Contact() {
  function handleMailSend(e) {
    e.preventDefault();
    console.log(1);

    // const name = document.getElementById("name").value;
    // const email = document.getElementById("email").value;
    // const message = document.getElementById("message").value;

    // const to = "your@email.com"; // Replace with your own email
    // const subject = encodeURIComponent("Requesting to connect you");
    // const body = encodeURIComponent(`Hi, I am ${name} (${email}).\n\n${message}`);

    // // Open default email client
    // window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    window.location.href =
      "mailto:manishkulal.dev@gmail.com&subject=helloworld&body=hiimanishhowareyou";
  }
  return (
    <section className="py-24 px-6 md:px-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Let's Create Something Amazing
          </h3>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/30 rounded-3xl p-8 md:p-12">
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-6 py-4 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 transition-colors duration-300"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-6 py-4 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 transition-colors duration-300"
              />
            </div>
            <textarea
              placeholder="Tell me about your project..."
              rows={6}
              className="w-full px-6 py-4 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 transition-colors duration-300 resize-none"
            ></textarea>
            <div className="text-center">
              <button
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold px-8 py-4 rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
                onClick={(e) => {
                  handleMailSend(e);
                }}
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

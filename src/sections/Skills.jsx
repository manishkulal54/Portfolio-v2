import { Database, Palette } from "lucide-react";
import React from "react";
import { PieChart, Cell, Pie, ResponsiveContainer } from "recharts";
import SkillCard from "../components/SkilCard";

export default function Skills({ languages, skills, stacks, tools }) {
  const COLORS = [
    "#00D4FF",
    "#FF6B6B",
    "#4ECDC4",
    "#45B7D1",
    "#96CEB4",
    "#FFEAA7",
    "#DDA0DD",
  ];

  return (
    <section className="py-24 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Technical Skills
          </h3>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            {/* Mobile: smaller container */}
            <div className="w-full h-72 md:h-96 bg-gray-900/30 backdrop-blur-sm rounded-3xl border border-gray-700/30 p-6">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={languages}
                    cx="50%"
                    cy="50%"
                    startAngle={90}
                    endAngle={-270}
                    innerRadius="30%" // Use percentages for responsiveness
                    outerRadius="80%" // Use percentages for responsiveness
                    dataKey="value"
                    isAnimationActive={true}
                    animationDuration={2000}
                    label={({
                      cx,
                      cy,
                      midAngle,
                      innerRadius,
                      outerRadius,
                      index,
                    }) => {
                      const RADIAN = Math.PI / 180;
                      const radius =
                        innerRadius + (outerRadius - innerRadius) * 0.5;
                      const x = cx + radius * Math.cos(-midAngle * RADIAN);
                      const y = cy + radius * Math.sin(-midAngle * RADIAN);
                      return (
                        <text
                          x={x}
                          y={y}
                          fill="#fff"
                          textAnchor="middle"
                          dominantBaseline="central"
                          className="text-xs md:text-sm font-semibold"
                        >
                          {languages[index].name}
                        </text>
                      );
                    }}
                    labelLine={false}
                  >
                    {languages.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <SkillCard key={index} skill={skill} index={index} />
              ))}
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold mb-4 text-white flex items-center">
                  <Palette className="w-6 h-6 mr-2 text-blue-400" />
                  Tech Stacks
                </h4>
                <div className="flex flex-wrap gap-3">
                  {stacks.map((stack, i) => (
                    <span
                      key={i}
                      className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 text-blue-300 py-2 px-4 rounded-full font-semibold"
                    >
                      {stack}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-4 text-white flex items-center">
                  <Database className="w-6 h-6 mr-2 text-purple-400" />
                  Development Tools
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {tools.map((tool, i) => (
                    <span
                      key={i}
                      className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 text-gray-300 py-2 px-3 rounded-lg text-sm font-medium text-center hover:border-purple-500/50 transition-colors duration-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

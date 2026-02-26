"use client";

import Image from "next/image";

export default function Skillset() {
  const skills = [
    { title: "HTML", icon: "/html.svg" },
    { title: "Mongo DB", icon: "/mongo.svg" },
    { title: "Javascript", icon: "/js.svg" },
    { title: "Docker", icon: "/docker.svg" },
    { title: "React JS", icon: "/react.svg" },
    { title: "Typescript", icon: "/ts.svg" },
  ];

  return (
    <section className="relative py-28 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1 text-xs border border-gray-200 rounded-full text-gray-500 tracking-widest">
            SKILL
          </span>
          <h2 className="text-5xl font-bold mt-4 text-gray-900">Skillset</h2>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-8 p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              {/* PROGRESS CIRCLE */}
              <div className="relative w-24 h-24 flex items-center justify-center">
                <svg className="w-24 h-24 -rotate-90" viewBox="0 0 100 100">
                  {/* Background */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#F3F4F6"
                    strokeWidth="10"
                    fill="none"
                  />

                  {/* Progress 90% */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="url(#gradient)"
                    strokeWidth="10"
                    fill="none"
                    strokeDasharray="251"
                    strokeDashoffset="25"
                    strokeLinecap="round"
                  />

                  <defs>
                    <linearGradient id="gradient">
                      <stop offset="0%" stopColor="#7C3AED" />
                      <stop offset="100%" stopColor="#4F46E5" />
                    </linearGradient>
                  </defs>
                </svg>

                <span className="absolute text-lg font-semibold text-gray-900">
                  90%
                </span>
              </div>

              {/* TEXT CONTENT */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Image
                    src={skill.icon}
                    alt={skill.title}
                    width={24}
                    height={24}
                  />
                  <h3 className="text-lg font-semibold text-gray-900">
                    {skill.title}
                  </h3>
                </div>

                <p className="text-sm text-gray-500 leading-relaxed">
                  Building the structure of web pages with semantic markup for
                  accessibility.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ARROW NAVIGATION */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-6 z-20">
        {/* Left Arrow */}
        <button className="w-14 h-14 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-purple-500 hover:text-purple-500 transition">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        {/* Right Arrow (Active) */}
        <button className="w-14 h-14 rounded-full border-2 border-purple-500 text-purple-500 flex items-center justify-center transition">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 6l6 6-6 6" />
          </svg>
        </button>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What's your approach to front-end development?",
    answer:
      "I focus on clean, maintainable code and prioritize user experience. My approach involves close collaboration with designers to ensure exact implementation and seamless interactions across all devices.",
  },
  {
    question: "How do you ensure websites load quickly and efficiently?",
    answer:
      "I optimize assets, implement lazy loading, minimize bundle sizes, and follow performance best practices such as caching and code splitting.",
  },
  {
    question: "What kind of projects do you specialize in?",
    answer:
      "I specialize in responsive websites, modern web applications, landing pages, and interactive UI experiences.",
  },
  {
    question: "How do you handle project deadlines?",
    answer:
      "I break projects into milestones, communicate progress regularly, and prioritize efficient workflow planning.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "I mainly work with React, Next.js, TypeScript, Tailwind CSS, and modern frontend tooling.",
  },
];

export default function FAQSection() {
  const [active, setActive] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="w-full bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-10">
            <span className="inline-block rounded-full border border-gray-300 px-3 py-1 text-xs text-gray-600">
              QNA
            </span>
            <h2 className="mt-3 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
            Your Questions, Answered
          </h2>
        </div>

        {/* FAQ LIST */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = active === index;

            return (
                
              <div
                key={index}
                className={`
                    relative overflow-hidden rounded-xl border transition-all duration-300 bg-white
                    ${isOpen ? "border-purple-500 shadow-sm" : "border-gray-200"}
                    
                    before:absolute
                    before:left-0
                    before:top-0
                    before:h-full
                    before:w-1.5
                    before:rounded-l-xl
                    before:transition-all
                    before:duration-300
                    ${
                    isOpen
                        ? "before:bg-purple-600"
                        : "before:bg-purple-400"
                    }
                `}
                >
                {/* QUESTION */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between text-left p-5 pl-6"
                >
                  <span
                    className={`font-semibold text-sm md:text-base ${
                      isOpen ? "text-purple-600" : "text-gray-800"
                    }`}
                  >
                    {faq.question}
                  </span>

                  <div
                    className="
                        ml-4
                        w-8 h-8
                        flex items-center justify-center
                        rounded-full
                        border border-gray-300
                        text-black
                        transition
                        hover:border-purple-500 hover:text-purple-600
                    "
                    >
                    {isOpen ? (
                        <Minus size={16} strokeWidth={2.5} />
                    ) : (
                        <Plus size={16} strokeWidth={2.5} />
                    )}
                    </div>
                </button>

                {/* ANSWER */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
"use client";

import Image from "next/image";
import { useRef } from "react";

const projects = [
  {
    id: 1,
    image: "/project-1.svg",
    title: "Vacation Landing Page",
    tags: ["React", "Tailwind", "Responsive"],
  },
  {
    id: 2,
    image: "/project-2.svg",
    title: "Banking Website",
    tags: ["Next.js", "TypeScript"],
  },
  {
    id: 3,
    image: "/project-3.png",
    title: "Portfolio Website",
    tags: ["UI Design", "Frontend"],
  },
];

export default function LatestProject() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!sliderRef.current) return;
    const width = sliderRef.current.clientWidth;
    sliderRef.current.scrollBy({
      left: dir === "left" ? -width : width,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-white py-14 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="mb-10 text-center">
          <span className="inline-block rounded-full border border-gray-300 px-3 py-1 text-xs text-gray-600">
            PORTFOLIO
          </span>
          <h2 className="mt-3 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
            Latest Project
          </h2>
        </div>

        {/* Slider */}
        <div className="relative">
          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4 scrollbar-hide"
          >
            {projects.map((p) => (
            <div
                key={p.id}
                className="min-w-[280px] sm:min-w-[360px] md:min-w-[420px] rounded-2xl bg-gray-50 shadow-sm"
            >
                <div className="overflow-hidden rounded-t-2xl bg-white">
                <Image
                    src={p.image}
                    alt={p.title}
                    width={580}
                    height={441}
                    className="h-[200px] w-full object-cover sm:h-[240px]"
                />
                </div>

                <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-900 sm:text-base">
                    {p.title}
                </h3>

                <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                    <span
                        key={tag}
                        className="rounded-full border border-gray-200 bg-white px-3 py-1 text-[10px] text-gray-600 sm:text-xs"
                    >
                        {tag}
                    </span>
                    ))}
                </div>
                </div>
            </div>
            ))}
          </div>

          {/* Arrows */}
          <div className="mt-6 flex justify-center gap-4">
            <button
              onClick={() => scroll("left")}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100"
            >
              ←
            </button>

            <button
              onClick={() => scroll("right")}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-purple-500 text-purple-500 hover:bg-purple-50"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
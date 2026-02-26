"use client";

import Image from "next/image";
import { useRef } from "react";

const testimonials = [
  {
    company: "Adobe",
    logo: "/logo/adobe.svg",
    text: "They tailor their solutions to our specific needs and goals.",
    name: "Jack Grealish",
    role: "CEO Adobe",
    avatar: "/profile-1.svg",
    active: true,
  },
  {
    company: "Airbnb",
    logo: "/logo/airbnb.svg",
    text: "They organized their work and internal management was outstanding.",
    name: "Kevin De Bruyne",
    role: "Project Manager Air BNB",
    avatar: "/profile-2.svg",
  },
  {
    company: "Loom",
    logo: "/logo/loom.svg",
    text: "Working with them was a great experience.",
    name: "Jeremy Doku",
    role: "Senior Developers Loom",
    avatar: "/profile-3.svg",
  },
  {
    company: "Spotify",
    logo: "/logo/spotify.svg",
    text: "They tailor their solutions to our specific needs and goals.",
    name: "Alex Morgan",
    role: "Product Lead Spotify",
    avatar: "/profile-4.svg",
  },
];

export default function Testimonials() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({
      left: dir === "left" ? -360 : 360,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="inline-block rounded-full border border-gray-300 px-3 py-1 text-xs text-gray-600">
            TESTIMONIALS
          </span>
          <h2 className="mt-3 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
            What Our Clients Say
          </h2>
        </div>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto scroll-smooth pb-4 scrollbar-hide"
        >
          {testimonials.map((item, i) => (
            <div
              key={i}
              className={`min-w-[300px] max-w-[300px] rounded-2xl border p-6
                flex flex-col
                ${
                  item.active
                    ? "border-transparent bg-gradient-to-br from-purple-500 to-indigo-500 text-white"
                    : "border-gray-200 bg-white text-gray-900"
                }`}
            >
              {/* Company */}
              <div className="mb-6">
                <Image
                  src={item.logo}
                  alt={item.company}
                  width={90}
                  height={24}
                  className={item.active ? "brightness-0 invert" : ""}
                />
              </div>

              {/* Quote */}
              <p
                className={`mb-8 text-base leading-relaxed ${
                  item.active ? "text-white" : "text-gray-700"
                }`}
              >
                {item.text}
              </p>

              {/* User */}
              <div className="mt-auto flex items-center gap-3">
                <Image
                    src={item.avatar}
                    alt={item.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                />
                <div>
                    <p className="text-sm font-semibold">{item.name}</p>
                    <p
                    className={`text-xs ${
                        item.active ? "text-white/80" : "text-gray-500"
                    }`}
                    >
                    {item.role}
                    </p>
                </div>
                </div>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={() => scroll("left")}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100"
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
    </section>
  );
}
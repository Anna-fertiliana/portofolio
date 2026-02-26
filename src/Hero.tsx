"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#070B18] text-white">

      {/* Gradient Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-[55%] 
      bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 
      blur-3xl opacity-40 z-0" />

      {/* GRID */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 40%, black 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 40%, black 100%)",
        }}
      />

      {/* CONTENT */}
      <div className="relative z-20 px-6 pt-32 pb-10 lg:px-16 lg:pt-28 max-w-7xl mx-auto">

        {/* MOBILE DEFAULT (STACKED) */}
        <div className="max-w-xl">

          <h1 className="text-3xl sm:text-4xl lg:text-[36px] font-extrabold leading-[1.2]">
            Hey There,<br />
            I’m Edwin Anderson
          </h1>

          <p className="mt-6 text-gray-300 text-sm sm:text-base max-w-md lg:hidden">
            Front-End Developer with a passion for clean code and intuitive design.
            Turning ideas into functional beauty
          </p>
        </div>

        {/* DESKTOP  */}
        <div className="hidden lg:block absolute right-16 top-30 max-w-sm text-gray-300 text-right text-sm leading-relaxed">
          Front-End Developer with a passion for clean code and intuitive design.
          Turning ideas into functional beauty
        </div>

      </div>

      {/* PROFILE IMAGE */}
      <div className="
        relative z-10 mt-10
        mx-auto w-[280px] sm:w-[340px]
        lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:bottom-0 lg:w-[450px]
      ">
        <Image
          src="/profile.svg"
          alt="Profile"
          width={500}
          height={650}
          className="w-full h-auto object-contain"
          priority
        />
      </div>

      {/* SOCIAL ICONS */}
      <div className="
        relative z-30 flex justify-center gap-4 mt-6 pb-16
        lg:absolute lg:bottom-10 lg:left-16 lg:mt-0
      ">

        {["Dribble.svg", "Instagram.svg", "Linkedin.svg"].map((icon, i) => (
          <a
            key={i}
            href="#"
            className="w-12 h-12 rounded-full bg-[#0A0D12]/60 
            flex items-center justify-center 
            backdrop-blur-md hover:bg-gray-700 transition"
          >
            <Image src={`/${icon}`} alt="social" width={44} height={44} />
          </a>
        ))}
      </div>

      {/* SCROLL BUTTON */}
      <div className="absolute bottom-25 right-6 lg:right-16">
      <button className="flex items-center gap-2 rounded-full
       bg-white/10 backdrop-blur-md px-4 lg:px-6 py-3 text-sm
       hover:bg-white/20 transition">

        {/* TEXT — desktop only */}
        <span className="hidden lg:inline">
          Scroll Down
        </span>

        {/* ARROW — always visible */}
        <span className="text-lg">
          ↓
        </span>

      </button>
    </div>

    </section>
  );
}
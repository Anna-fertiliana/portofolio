"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative w-full bg-gradient-to-b
        from-[#0c1325] 
        to-[#6d28d9] 
        text-white 
     overflow-hidden -mt-64">
      
      {/* CURVE */}
        <div className="absolute top-0 left-0 w-full">
    <svg
      viewBox="0 0 1440 200"
      className="w-full h-[180px]"
      preserveAspectRatio="none"
    >
      <path
        fill="#ffffff"
        d="
          M0,40
          C360,140 1080,140 1440,40
          L1440,0
          L0,0
          Z
        "
      />
    </svg>
  </div>

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 pt-64 pb-20 text-center">
        <div className="mx-auto max-w-md">
          <div className="flex items-center justify-center gap-3">
            <Image
                src="/logo.svg"
                alt="Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
            />
            <span className="text-lg font-semibold">Your Logo</span>
            </div>

          <p className="mt-4 text-sm text-gray-300">
            Front-End Developer with a passion for clean code and intuitive
            design. Turning ideas into functional beauty
          </p>

          {/* SOCIAL */}
          <div className="mt-6 flex justify-center gap-4">
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-[#0A0D12]/50 flex items-center justify-center backdrop-blur-md hover:bg-gray-700 transition"
            >
              <Image src="/Dribble.svg" alt="Dribbble" width={40} height={40} />
            </a>

            <a
              href="#"
              className="w-12 h-12 rounded-full bg-[#0A0D12]/50 flex items-center justify-center backdrop-blur-md hover:bg-gray-700 transition"
            >
              <Image src="/Instagram.svg" alt="Instagram" width={40} height={40} />
            </a>

            <a
              href="#"
              className="w-12 h-12 rounded-full bg-[#0A0D12]/50 flex items-center justify-center backdrop-blur-md hover:bg-gray-700 transition"
            >
              <Image src="/Linkedin.svg" alt="LinkedIn" width={40} height={40} />
            </a>
          </div>
        </div>
      </div>

      {/* GRADIENT GLOW */} 
      <div className="absolute bottom-0 left-0 right-0 h-[65%] 
        bg-gradient-to-r 
        from-[#0c1325] 
        via-[#6d28d9] 
        to-[#db2777] 
        blur-[120px] opacity-70 z-0" />

      {/* ===== GRID BACKGROUND (PALING BAWAH) ===== */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 40%, black 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 40%, black 100%)",
        }}
      />

      {/* DIAMOND */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-3 h-3 rotate-45 bg-white/15" />
        <div className="absolute top-1/2 right-1/4 w-3 h-3 rotate-45 bg-white/15" />
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 rotate-45 bg-white/15" />
      </div>
      
    </footer>
  );
}
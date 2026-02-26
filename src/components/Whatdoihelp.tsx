"use client";

import Image from "next/image";

export default function WhatDoIHelp() {
  return (
    <section className="relative bg-white text-black pt-40 pb-24 px-6 lg:px-20">

      {/* CURVE */}
        <div 
        className="absolute -top-24 left-0 w-full z-20"> 
        <svg 
        viewBox="0 0 1440 150" 
        className="w-full h-[120px]" 
        preserveAspectRatio="none" > 
        <path 
        fill="#ffffff" 
        d=" 
        M0,40 C360,140 
        1080,140 1440,40 
        L1440,150 L0,150 
        Z " 
        /> 
        </svg> 
        </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">

        {/* LEFT - SERVICE CARDS */}
        <div className="bg-purple-100/40 p-8 rounded-3xl space-y-6">

            {/* Landing */}
            <div className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-transparent flex items-center justify-center">
                <Image
                    src="/landing.svg"
                    alt="Landing Page"
                    width={40}
                    height={40}
                />
                </div>
                <div>
                <h3 className="font-semibold text-lg text-black">
                    Landing Page
                </h3>
                <p className="text-sm text-gray-500">5 Project</p>
                </div>
            </div>

            {/* Dashboard */}
            <div className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-transparent flex items-center justify-center">
                <Image
                    src="/dashboard.svg"
                    alt="Dashboard SaaS"
                    width={40}
                    height={40}
                />
                </div>
                <div>
                <h3 className="font-semibold text-lg text-black">
                    Dashboard SaaS
                </h3>
                <p className="text-sm text-gray-500">7 Project</p>
                </div>
            </div>

            {/* Company */}
            <div className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-transparent flex items-center justify-center">
                <Image
                    src="/company.svg"
                    alt="Company Profile"
                    width={40}
                    height={40}
                />
                </div>
                <div>
                <h3 className="font-semibold text-lg text-black">
                    Company Profile
                </h3>
                <p className="text-sm text-gray-500">12 Project</p>
                </div>
            </div>

            </div>

        {/* RIGHT - ABOUT TEXT */}
        <div>

          <span className="inline-block px-4 py-1 mb-6 text-sm bg-gray-100 rounded-full text-gray-600">
            ABOUT ME
          </span>

          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-black">
            What Do I Help?
          </h2>

          <p className="text-gray-600 leading-relaxed mb-10 max-w-xl">
            I am a Frontend Developer dedicated to solving problems and creating impactful digital experiences.
            By combining process-driven design and modern development practices,
            I build intuitive and responsive digital products that enhance user satisfaction and drive business success.
          </p>

          {/* STATS */}
            <div className="flex items-center gap-16 flex-wrap">

            {/* Projects */}
            <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center">
                <Image
                    src="/project.svg"
                    alt="Projects"
                    width={40}
                    height={40}
                />
                </div>
                <div>
                <h3 className="text-4xl font-bold text-black">200+</h3>
                <p className="text-gray-500">Project Completed</p>
                </div>
            </div>

            {/* Clients */}
            <div className="flex items-start gap-4">
                <div className="w-24 h-24 flex items-center justify-center">
                <Image
                    src="/client.svg"
                    alt="Clients"
                    width={320}
                    height={320}
                />
                </div>
                <div>
                <h3 className="text-4xl font-bold text-black">50+</h3>
                <p className="text-gray-500">Happy Clients</p>
                </div>
            </div>

            </div>

        </div>

      </div>
    </section>
  );
}
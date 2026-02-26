"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [success, setSuccess] = useState(true);

  const handleHire = () => {
    const result = Math.random() > 0.5; // simulasi sukses / error
    setSuccess(result);
    setShowPopup(true);
    setIsOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-16">
          
          {/* LOGO */}
          <div className="flex items-center gap-3">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={40}
              height={40}
              className="h-9 w-auto"
            />
            <span className="text-lg font-semibold text-white">
              Your Logo
            </span>
          </div>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-10 text-sm text-gray-300">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Skill</li>
            <li className="hover:text-white cursor-pointer">Projects</li>
            <li className="hover:text-white cursor-pointer">FAQ</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>

          {/* DESKTOP CTA */}
          <button
            onClick={handleHire}
            className="hidden md:flex items-center gap-2 rounded-full 
            bg-gradient-to-r from-purple-500 to-indigo-500 
            px-6 py-2 text-sm text-white 
            transition-all duration-300 hover:scale-105"
          >
            <Mail size={16} />
            Hire Me
          </button>

          {/* HAMBURGER */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white z-[60]"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            
            {/* backdrop */}
            <div
              className="absolute inset-0 bg-black/60"
              onClick={() => setIsOpen(false)}
            />

            {/* panel */}
            <div className="absolute top-0 right-0 h-full w-full bg-[#0c1325] px-6 py-24 space-y-6 text-gray-300">

              <div className="space-y-4">
                <p className="hover:text-white cursor-pointer">Home</p>
                <p className="hover:text-white cursor-pointer">About</p>
                <p className="hover:text-white cursor-pointer">Skill</p>
                <p className="hover:text-white cursor-pointer">Projects</p>
                <p className="hover:text-white cursor-pointer">FAQ</p>
                <p className="hover:text-white cursor-pointer">Contact</p>
              </div>

              <button
                onClick={handleHire}
                className="w-full flex items-center justify-center gap-2 rounded-full 
                bg-gradient-to-r from-purple-500 to-indigo-500 
                px-6 py-3 text-sm text-white"
              >
                <Mail size={16} />
                Hire Me
              </button>

            </div>
          </div>
        )}
      </nav>

      {/* POPUP */}
      {showPopup && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-4">
          <div className="w-full max-w-sm rounded-2xl bg-[#0c1325] p-6 text-center animate-scale">
            <div className="text-4xl mb-2">
              {success ? "✅" : "❌"}
            </div>

            <h3 className="text-lg font-semibold text-white">
              {success
                ? "Message Sent Successfully!"
                : "Oops! Something went wrong"}
            </h3>

            <p className="mt-1 text-sm text-gray-400">
              {success
                ? "Thank you for reaching out. I will reply soon."
                : "Please try again later or contact me directly."}
            </p>

            <button
              onClick={() => setShowPopup(false)}
              className="mt-4 w-full rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 py-2 text-sm text-white"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
}
"use client";

import Image from "next/image";

export default function ContactSection() {
  return (
    <section className="relative w-full bg-white">
      {/* ===== TOP AREA ===== */}
      <div className="relative bg-white pt-16 pb-32 px-4">
        <div className="mx-auto max-w-md text-center">
          <span className="text-xs tracking-widest text-gray-400 uppercase">
            Contact
          </span>

          <h2 className="mt-2 text-3xl font-bold text-gray-900">
            Get in Touch
          </h2>
        </div>

        {/* FORM CARD */}
        <div className="relative z-10 mt-8 mx-auto max-w-md rounded-2xl bg-white p-6 shadow-xl">
          <form className="space-y-4">
            {/* Name */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-2 outline-none focus:border-purple-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-2 outline-none focus:border-purple-500"
              />
            </div>

            {/* Message */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                rows={4}
                className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-2 outline-none focus:border-purple-500"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 py-3 font-medium text-white shadow-md transition hover:opacity-90 active:scale-[0.98]"
            >
              ✈ Submit
            </button>
          </form>
        </div>

        {/* DOT PATTERN */}
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-30">
          <div className="absolute left-0 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,#d4d4d8_1px,transparent_1px)] [background-size:10px_10px]" />
          <div className="absolute right-0 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,#d4d4d8_1px,transparent_1px)] [background-size:10px_10px]" />
        </div>
      </div>

      
    </section>
  );
}
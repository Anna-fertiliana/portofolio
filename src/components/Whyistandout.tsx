import Image from "next/image";

export default function WhyIStandOut() {
  return (
    <section className="bg-[#F6F2FF] py-14 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="mb-10 text-center md:mb-14">
          <span className="inline-block rounded-full border border-gray-300 px-3 py-1 text-[10px] font-medium tracking-wide text-gray-600 sm:text-xs">
            COMPARASION
          </span>

          <h2 className="mt-3 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
            Why I Stand Out
          </h2>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-8">
          {/* WITH ME */}
          <div className="rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-500 p-6 text-white shadow-lg sm:p-7 md:p-8">
            <div className="mb-6 flex flex-col items-center">
              <Image
                src="/profile.svg"
                alt="With Me"
                width={80}
                height={80}
                className="
                    aspect-square
                    rounded-full
                    bg-white
                    object-contain
                    object-bottom
                    p-1
                "
                />
              <h3 className="mt-3 text-base font-semibold sm:text-lg">
                With Me              
                </h3>
            </div>

            <ul className="mx-auto space-y-3 text-center sm:space-y-4">
              {[
                "React Expert",
                "Precise Website Implementation",
                "TypeScript Proficiency",
                "Clean, Maintainable Code",
                "Responsive Website Development",
                "Performance Optimization",
                "UI Design Proficiency (Figma)",
              ].map((item) => (
                <li
                    key={item}
                    className="flex items-center justify-center gap-3 text-sm sm:text-base"
                    >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white text-purple-600 sm:h-6 sm:w-6">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ANOTHER TALENT */}
          <div className="rounded-2xl bg-white p-6 shadow-lg sm:p-7 md:p-8">
            <div className="mb-6 flex flex-col items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-200 sm:h-18 sm:w-18 md:h-20 md:w-20">
                <svg
                  className="h-8 w-8 text-gray-400 sm:h-9 sm:w-9 md:h-10 md:w-10"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12Zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8Z" />
                </svg>
              </div>

              <h3 className="mt-3 text-base font-semibold text-gray-800 sm:text-lg">
                Another Talent
              </h3>
            </div>

            <ul className="mx-auto space-y-3 text-center sm:space-y-4">
              {[
                "Basic React Knowledge",
                "Inconsistent Design Translation",
                "Little to No TypeScript Knowledge",
                "Unstructured Code",
                "Inconsistent Responsiveness",
                "Slow and Heavy Websites",
                "No Design Skills",
              ].map((item) => (
                <li
                    key={item}
                    className="flex items-center justify-center gap-3 text-sm text-gray-700 sm:text-base"
                    >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-500 sm:h-6 sm:w-6">
                    ✕
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
import Image from "next/image";

const experiences = [
  {
    year: "2021 - 2024",
    role: "Frontend Developers",
    company: "Slack",
    logo: "/logo/slack.svg",
    description:
      "Guided a team of developers in creating complex web applications and spearheaded the development, increasing customer retention by 30%.",
  },
  {
    year: "2021 - 2024",
    role: "Frontend Developers",
    company: "Telegram",
    logo: "/logo/telegram.svg",
    description:
      "Guided a team of developers in creating complex web applications and spearheaded the development, increasing customer retention by 30%.",
  },
  {
    year: "2021 - 2024",
    role: "Frontend Developers",
    company: "Line",
    logo: "/logo/line.svg",
    description:
      "Guided a team of developers in creating complex web applications and spearheaded the development, increasing customer retention by 30%.",
  },
  {
    year: "2021 - 2024",
    role: "Frontend Developers",
    company: "Skype",
    logo: "/logo/skype.svg",
    description:
      "Guided a team of developers in creating complex web applications and spearheaded the development, increasing customer retention by 30%.",
  },
];

export default function ProfessionalCareer() {
  return (
    <section className="bg-white py-14 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="inline-block rounded-full border border-gray-300 px-3 py-1 text-xs text-gray-600">
            WORK EXPERIENCE
          </span>
          <h2 className="mt-3 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
            Profesional Career
          </h2>
        </div>

        {/* Experience List */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="flex overflow-hidden rounded-2xl border border-gray-200 bg-white"
            >
              {/* Year */}
              <div
                className="
                  flex w-28 flex-shrink-0 items-center justify-center
                  bg-gradient-to-br from-purple-500 to-indigo-500
                  text-sm font-semibold text-white
                  rounded-tr-[40px] rounded-br-[40px]
                "
              >
                {exp.year}
              </div>

              {/* Content */}
              <div className="flex-1 p-6">
                {/* Role + Description sejajar */}
                <div className="flex flex-col gap-2 md:flex-row md:gap-6">
                  <h3 className="min-w-[180px] font-semibold text-gray-900">
                    {exp.role}
                  </h3>

                  <p className="text-sm leading-relaxed text-gray-600">
                    {exp.description}
                  </p>
                </div>

                {/* Company */}
                <div className="-mt-3 flex items-center gap-2 text-sm text-gray-700">
                  <Image
                    src={exp.logo}
                    alt={exp.company}
                    width={18}
                    height={18}
                  />
                  {exp.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
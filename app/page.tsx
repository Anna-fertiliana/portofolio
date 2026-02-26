import Hero from "@/Hero";
import WhatDoIHelp from "@/components/Whatdoihelp";
import SkillSet from "@/components/skillset";
import WhyIStandOut from "@/components/Whyistandout";
import LatestProject from "@/components/Latestproject";
import ProfessionalCareer from "@/components/Professionalcareer";
import Testimonial from "@/components/Testimonial";
import FAQ from "@/components/FAQ";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>
      <Hero />
      <Navbar />
      <WhatDoIHelp />
      <SkillSet />
      <WhyIStandOut />
      <LatestProject />
      <ProfessionalCareer />
      <Testimonial />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
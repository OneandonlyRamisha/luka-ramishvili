"use client";

import NerdBtn from "@/components/nerdBtn/nerdBtn";
import ContactSection from "@/sections/contactSection/contactSection";
import FooterSection from "@/sections/footerSection/footerSection";
import HeroSection from "@/sections/heroSection/heroSection";
import MyServicesSection from "@/sections/myServicesSection/myServicesSection";
import NerdSection from "@/sections/nerdSection/nerdSection";
import ProjectsSection from "@/sections/projectsSection/projectsSection";
import TeckStackSection from "@/sections/techStackSection/techStackSection";
import TestimonialSection from "@/sections/testimonialSection/testimonialSection";
import { useState } from "react";

export default function Home() {
  const [nerdMode, setNerdMode] = useState(false);
  return (
    <main style={{ position: "relative" }}>
      <NerdBtn nerdMode={nerdMode} setNerdMode={setNerdMode} />
      {!nerdMode ? (
        <>
          <HeroSection />
          <TeckStackSection />
          <ProjectsSection />
          <MyServicesSection />
          <TestimonialSection />
          <ContactSection />
          <FooterSection />
        </>
      ) : (
        <NerdSection />
      )}
    </main>
  );
}

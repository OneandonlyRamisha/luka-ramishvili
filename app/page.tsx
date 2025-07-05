import ContactSection from "@/sections/contactSection/contactSection";
import FooterSection from "@/sections/footerSection/footerSection";
import HeroSection from "@/sections/heroSection/heroSection";
import MyServicesSection from "@/sections/myServicesSection/myServicesSection";
import ProjectsSection from "@/sections/projectsSection/projectsSection";
import TeckStackSection from "@/sections/techStackSection/techStackSection";
import TestimonialSection from "@/sections/testimonialSection/testimonialSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TeckStackSection />
      <ProjectsSection />
      <MyServicesSection />
      <TestimonialSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}

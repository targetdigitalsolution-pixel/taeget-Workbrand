import React from "react";
import HeaderLayout from "../component/layers/HeaderLayout/HeaderLayout";
import HeroSection from "../component/sharedComponents/HeroSection";
import Footer from "../component/sharedComponents/Footer";
import ServicesDetailSections from "../component/Services/ServicesDetailSections";
import RightPlace from "../component/sharedComponents/RightPlace";
import servicesHero from "../assets/images/servicesHero.webp";

const ServicesPage = () => {
  return (
    <section className="bg-custom-gradient-bg">
      <HeaderLayout />
      <HeroSection
        backgroundImage={servicesHero}
        title="Services"
        description="We offer fully-equipped, flexible workspaces designed to support startups, freelancers, and growing teams. Whether you need a quiet private office or a dynamic shared area, we’ve got you covered."
      />
      <ServicesDetailSections />
      <RightPlace />
      <Footer />
    </section>
  );
};

export default ServicesPage;

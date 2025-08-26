import React from "react";
import HeaderLayout from "../component/layers/HeaderLayout/HeaderLayout";
import Footer from "../component/sharedComponents/Footer";
import BusinessHubHero from "../component/BusinessHub/BusinessHubHero";
import TeamSection from "../component/BusinessHub/TeamSection";
import ConnectionSection from "../component/BusinessHub/ConnectionSection";

const BusinessHubPage = () => {
  return (
    <section className="bg-custom-gradient-bg">
      <HeaderLayout />
      <BusinessHubHero />
      <TeamSection />
      <ConnectionSection />
      <Footer />
    </section>
  );
};

export default BusinessHubPage;
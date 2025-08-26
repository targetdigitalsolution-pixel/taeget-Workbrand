import React from "react";
import HeaderLayout from "../component/layers/HeaderLayout/HeaderLayout";
import Footer from "../component/sharedComponents/Footer";
import BusinessHubHero from "../component/BusinessHub/BusinessHubHero";
import WhoIsHereSection from "../component/BusinessHub/WhoIsHereSection";
import FindConnectionSection from "../component/BusinessHub/FindConnectionSection";

const BusinessHubPage = () => {
  return (
    <section className="bg-white">
      <HeaderLayout />
      <BusinessHubHero />
      <WhoIsHereSection />
      <FindConnectionSection />
      <Footer />
    </section>
  );
};

export default BusinessHubPage;
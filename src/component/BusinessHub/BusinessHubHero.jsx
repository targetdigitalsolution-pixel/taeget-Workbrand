import React from "react";
import CustomMainButton from "../sharedComponents/CustomMainButton";
import TripleArrowIcon from "../sharedComponents/TripleArrowIcon";
import { useNavigate } from "react-router-dom";

const BusinessHubHero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full opacity-10"></div>
        <div className="absolute top-32 right-20 w-24 h-24 bg-white rounded-full opacity-10"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-white rounded-full opacity-10"></div>
        <div className="absolute bottom-32 right-10 w-28 h-28 bg-white rounded-full opacity-10"></div>
      </div>

      <div className="relative z-10 max-container px-4">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Welcome To Your Business Hub
          </h1>
          
          <div className="flex justify-center">
            <CustomMainButton
              text="Get Started"
              TripleArrow={<TripleArrowIcon color="white" />}
              onClick={() => navigate("/coming-soon")}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessHubHero;
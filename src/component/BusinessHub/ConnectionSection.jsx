import React, { useState } from "react";
import { motion } from "framer-motion";
import MainTitle from "../sharedComponents/MainTittle";
import CustomMainButton from "../sharedComponents/CustomMainButton";
import TripleArrowIcon from "../sharedComponents/TripleArrowIcon";
import { fadeInUp, fadeInPlace } from "../../utils/motionVariants";
import { useNavigate } from "react-router-dom";

const ConnectionSection = () => {
  const navigate = useNavigate();
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  const industries = [
    "Technology",
    "Healthcare",
    "Finance",
    "E-commerce",
    "Education",
    "Real Estate",
    "Manufacturing",
    "Consulting",
    "Media & Entertainment",
    "Food & Beverage"
  ];

  const locations = [
    "Cairo",
    "Giza",
    "Alexandria",
    "Sharm El Sheikh",
    "Hurghada",
    "Luxor",
    "Aswan",
    "Mansoura",
    "Tanta",
    "Ismailia"
  ];

  return (
    <section className="py-16 bg-custom-gradient-card">
      <div className="max-container px-4 lg:px-0">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInPlace}
        >
          <MainTitle
            title="Find The Right"
            subdescription="Connection"
            description="Connect with the perfect business partners, mentors, or collaborators in your industry and location."
          />
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Industry Selection */}
              <div>
                <label className="block text-lg font-semibold text-gray-700 mb-3">
                  Select Your Industry
                </label>
                <select
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                  className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-custom-primary focus:outline-none transition-colors duration-300 text-gray-700"
                >
                  <option value="">Choose an industry...</option>
                  {industries.map((industry) => (
                    <option key={industry} value={industry}>
                      {industry}
                    </option>
                  ))}
                </select>
              </div>

              {/* Location Selection */}
              <div>
                <label className="block text-lg font-semibold text-gray-700 mb-3">
                  Select Your Location
                </label>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-custom-primary focus:outline-none transition-colors duration-300 text-gray-700"
                >
                  <option value="">Choose a location...</option>
                  {locations.map((location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Search Button */}
            <div className="text-center">
              <CustomMainButton
                text="Find Connections"
                TripleArrow={<TripleArrowIcon color="white" />}
                onClick={() => navigate("/coming-soon")}
              />
            </div>

            {/* Additional Info */}
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                Join over <span className="font-bold text-custom-primary">5,000+</span> entrepreneurs 
                and business professionals in our network
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Verified Profiles
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Secure Networking
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-custom-primary rounded-full"></div>
                  Expert Matching
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {[
            { number: "5,000+", label: "Active Members" },
            { number: "50+", label: "Industries" },
            { number: "1,200+", label: "Successful Connections" },
            { number: "95%", label: "Satisfaction Rate" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-custom-primary mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ConnectionSection;
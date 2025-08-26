import React, { useState } from "react";
import CustomMainButton from "../sharedComponents/CustomMainButton";
import TripleArrowIcon from "../sharedComponents/TripleArrowIcon";
import { useNavigate } from "react-router-dom";

const WhoIsHereSection = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Studio", "Agency", "Solutions", "Startup", "Expert"];

  const profiles = [
    {
      id: 1,
      name: "Business Hubs",
      role: "Networking & Collaboration",
      description: "Connect with entrepreneurs and business leaders in our professional networking hubs.",
      avatar: require("../../assets/images/Sara_Khaled.webp"),
      category: "Studio"
    },
    {
      id: 2,
      name: "Startup Lawyer",
      role: "Legal & Compliance",
      description: "Get expert legal advice for your startup and business compliance needs.",
      avatar: require("../../assets/images/Ahmed_Nabil.webp"),
      category: "Expert"
    },
    {
      id: 3,
      name: "Graphic Designer",
      role: "Creative & Branding",
      description: "Professional design services to elevate your brand and marketing materials.",
      avatar: require("../../assets/images/Layla _Mostafa.webp"),
      category: "Agency"
    },
    {
      id: 4,
      name: "Business Hubs",
      role: "Strategic Planning",
      description: "Strategic business planning and growth consulting for scaling companies.",
      avatar: require("../../assets/images/Sara_Khaled.webp"),
      category: "Solutions"
    },
    {
      id: 5,
      name: "Startup Lawyer",
      role: "Investment & Funding",
      description: "Connect with investors and get funding guidance for your startup journey.",
      avatar: require("../../assets/images/Ahmed_Nabil.webp"),
      category: "Startup"
    },
    {
      id: 6,
      name: "Graphic Designer",
      role: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to grow your online presence.",
      avatar: require("../../assets/images/Layla _Mostafa.webp"),
      category: "Agency"
    }
  ];

  const filteredProfiles = activeFilter === "All" 
    ? profiles 
    : profiles.filter(profile => profile.category === activeFilter);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-container px-4 lg:px-0">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Who's Here With You?
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-custom-primary text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Profile Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProfiles.map((profile) => (
            <div
              key={profile.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={profile.avatar}
                    alt={profile.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800">{profile.name}</h3>
                    <p className="text-sm text-custom-primary">{profile.role}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {profile.description}
                </p>
                
                <CustomMainButton
                  text="Connect"
                  TripleArrow={<TripleArrowIcon color="white" />}
                  onClick={() => navigate("/coming-soon")}
                  fullWidth
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoIsHereSection;
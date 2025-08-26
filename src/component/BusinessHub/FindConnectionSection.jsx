import React, { useState } from "react";
import CustomMainButton from "../sharedComponents/CustomMainButton";
import TripleArrowIcon from "../sharedComponents/TripleArrowIcon";
import { useNavigate } from "react-router-dom";

const FindConnectionSection = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="py-16 bg-white">
      <div className="max-container px-4 lg:px-0">
        <div className="max-w-2xl mx-auto text-center">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
            Find The Right Connection
          </h2>
          
          {/* Search Form */}
          <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Search for connections, skills, or industries..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-custom-primary transition-colors duration-300"
              />
              <div className="w-full md:w-auto">
                <CustomMainButton
                  text="Search"
                  TripleArrow={<TripleArrowIcon color="white" />}
                  onClick={() => navigate("/coming-soon")}
                  fullWidth
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindConnectionSection;
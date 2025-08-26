import React from "react";
import { motion } from "framer-motion";
import MainTitle from "../sharedComponents/MainTittle";
import CustomMainButton from "../sharedComponents/CustomMainButton";
import TripleArrowIcon from "../sharedComponents/TripleArrowIcon";
import { fadeInUp, fadeInPlace } from "../../utils/motionVariants";
import { useNavigate } from "react-router-dom";

// Import team member images (using existing images from your project)
import teamMember1 from "../../assets/images/Sara_Khaled.webp";
import teamMember2 from "../../assets/images/Ahmed_Nabil.webp";
import teamMember3 from "../../assets/images/Layla _Mostafa.webp";

const TeamSection = () => {
  const navigate = useNavigate();

  const teamMembers = [
    {
      id: 1,
      name: "Business Hubs",
      role: "Networking & Collaboration",
      description: "Connect with entrepreneurs and business leaders in our professional networking hubs.",
      image: teamMember1,
      buttonText: "Join Network"
    },
    {
      id: 2,
      name: "Startup Lawyer",
      role: "Legal & Compliance",
      description: "Get expert legal advice for your startup and business compliance needs.",
      image: teamMember2,
      buttonText: "Get Legal Help"
    },
    {
      id: 3,
      name: "Graphic Designer",
      role: "Creative & Branding",
      description: "Professional design services to elevate your brand and marketing materials.",
      image: teamMember3,
      buttonText: "Design Services"
    },
    {
      id: 4,
      name: "Business Hubs",
      role: "Strategic Planning",
      description: "Strategic business planning and growth consulting for scaling companies.",
      image: teamMember1,
      buttonText: "Plan Strategy"
    },
    {
      id: 5,
      name: "Startup Lawyer",
      role: "Investment & Funding",
      description: "Connect with investors and get funding guidance for your startup journey.",
      image: teamMember2,
      buttonText: "Find Funding"
    },
    {
      id: 6,
      name: "Graphic Designer",
      role: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to grow your online presence.",
      image: teamMember3,
      buttonText: "Boost Marketing"
    }
  ];

  return (
    <section className="py-16 max-container">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInPlace}
      >
        <MainTitle
          title="Who's Here"
          subdescription="With You?"
          description="Meet our diverse community of entrepreneurs, experts, and innovators ready to collaborate and support your business journey."
        />
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 lg:px-0"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        {teamMembers.map((member, index) => (
          <div
            key={member.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group"
          >
            <div className="relative overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-custom-primary rounded-full"></div>
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-custom-primary transition-colors duration-300">
                  {member.name}
                </h3>
              </div>
              
              <p className="text-custom-primary font-semibold mb-3">
                {member.role}
              </p>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {member.description}
              </p>
              
              <div className="flex justify-center">
                <CustomMainButton
                  text={member.buttonText}
                  TripleArrow={<TripleArrowIcon color="white" />}
                  onClick={() => navigate("/coming-soon")}
                  fullWidth
                />
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default TeamSection;
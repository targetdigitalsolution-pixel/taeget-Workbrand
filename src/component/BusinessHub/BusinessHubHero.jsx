import React from "react";
import { motion } from "framer-motion";
import CustomMainButton from "../sharedComponents/CustomMainButton";
import TripleArrowIcon from "../sharedComponents/TripleArrowIcon";
import { fadeInUp, fadeInPlace } from "../../utils/motionVariants";
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

      {/* Business Network Icons */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 text-white opacity-30">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="absolute top-40 right-1/3 text-white opacity-30">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
          </svg>
        </div>
        <div className="absolute bottom-40 left-1/3 text-white opacity-30">
          <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 6a2 2 0 104 0 2 2 0 00-4 0zm6 0a2 2 0 104 0 2 2 0 00-4 0z" clipRule="evenodd" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-container px-4">
        <motion.div
          className="text-center text-white"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInPlace}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Welcome To Your{" "}
            <span className="text-custom-yellow">Business Hub</span>
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Connect with like-minded entrepreneurs, share experiences, and grow your network in our thriving business community.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="w-auto">
              <CustomMainButton
                text="Join Our Community"
                TripleArrow={<TripleArrowIcon color="white" />}
                onClick={() => navigate("/coming-soon")}
              />
            </div>
            <button
              className="text-white border-2 border-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-800 transition duration-300"
              onClick={() => navigate("/coming-soon")}
            >
              Learn More
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="#fef4db"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="#fef4db"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#fef4db"></path>
        </svg>
      </div>
    </section>
  );
};

export default BusinessHubHero;
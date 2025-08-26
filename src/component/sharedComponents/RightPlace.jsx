import React from "react";
import CustomMainButton from "../sharedComponents/CustomMainButton";
import LightButton from "../sharedComponents/LightButton";
import TripleArrowIcon from "../sharedComponents/TripleArrowIcon";
const RightPlace = () => {
  return (
    <section className="mb-12 max-container">
      <div className="py-8 mx-4 shadow-lg lg:py-16 xl:mx-0 bg-custom-gradient-card rounded-3xl">
        <div className="max-w-3xl px-6 mx-auto text-center">
          <h2 className="mb-4 text-2xl font-bold leading-snug md:text-5xl text-custom-primary">
            Start From <span className="text-black">The Right Place</span>
          </h2>

          <h3 className="mb-3 text-lg font-semibold text-gray-500 lg:mb-5 md:text-xl">
            Get your business up and running from one of the most strategic
            spots in Cairo.
          </h3>

          <p className="mb-8 text-base leading-relaxed text-black md:text-lg">
            Whether you're starting small or scaling fast — we've got the space
            and support to match your ambition. 👉 Don’t wait — take the first
            step today!
          </p>

          <div className="flex justify-center w-full mx-auto md:w-1/2">
            <CustomMainButton
              fullWidth
              text="Book Your Office Now"
              TripleArrow={
                <TripleArrowIcon color="text-white" hoverColor="white" />
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RightPlace;

import React from "react";

const HeroSection = ({ backgroundImage, title, description }) => {
  return (
    <section
      className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center pt-[100px] lg:pt-0"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      <div className="relative z-10 flex flex-col items-center justify-center px-0 text-white md:items-start lg:pr-56">
        <h1 className="mb-4 text-3xl font-bold md:text-5xl">{title}</h1>
        <p className="flex max-w-3xl p-5 mx-auto text-lg text-center md:text-start md:p-0 md:text-lg">{description}</p>
      </div>
    </section>
  );
};

export default HeroSection;

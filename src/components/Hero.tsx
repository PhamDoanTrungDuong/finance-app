import React from "react";
import Typed from "react-typed";

const Hero: React.FC = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2">
          GROWING WITH DATA ANALYTICS
        </p>
        <h3 className="text-4xl sm:text-6xl md:text-7xl font-bold md:py-6">
          Grow with data.
        </h3>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-3">
            Fast, flexible financing for
          </p>
          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
            strings={["BTC", "ETH", "ALT","BNB"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">Monitor your data analytics to increase revenue for BTC, ETH, ALT platforms</p>
        <button className='bg-[#00df9a] w-[150px] text-[#000300] hover:text-gray-50 duration-200 rounded-md font-medium my-6 p-2 mx-auto'>Get Started</button>
      </div>
    </div>
  );
};

export default Hero;

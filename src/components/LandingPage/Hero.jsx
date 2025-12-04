import React from 'react'
import Marquee from "react-fast-marquee";
const Hero = () => {
  return (
    <div className="px-4 md:px-8 py-10">
      {/* Scrolling tagline */}
      <div className="overflow-x-hidden overflow-y-hidden w-full">
        <Marquee
          gradient={false}
          speed={50}
          pauseOnHover={true}
          direction="left"
          className="text-slate-200 text-md text-lg  md:text-3xl font-bold whitespace-nowrap"
        >
          Practice smarter: formulas, MCQs, and explanations — all in one
          animated, responsive site.
        </Marquee>
      </div>
    </div>
  );
}

export default Hero
import React from 'react';

const Building = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="text-center flex flex-col items-center">
        {/* GIF Container */}
        <div className="flex justify-center">
          <img 
            src="/images/sss-logo.gif" 
            alt="Building in progress"
            className="max-w-[300px] md:max-w-[400px] lg:max-w-[500px] w-full h-auto opacity-90"
          />
        </div>

        {/* Text - positioned close below GIF */}
        <div className="space-y-4 -mt-8 md:-mt-12 lg:-mt-16 relative z-10 font-['Montserrat',_sans-serif]">
          <h1 className="text-white/90 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            A Fresh Identity is Arriving Soon.
          </h1>
          <div className="flex items-center justify-center gap-2 text-white/50">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
            </span>
            <p className="text-sm md:text-base font-medium tracking-wide opacity-90">
              Under Construction
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Building;
"use client";

import NumberTicker from "./number-ticker";

export const NumberTickerDisplay = ({ count }: { count: number }) => {
  return (
    <section className="h-[60%] md:min-h-screen flex flex-col justify-center items-center text-center px-4 gap-10 md:gap-24 py-8 md:py-16">
      <h1 className="text-2xl md:text-4xl lg:text-7xl font-extrabold font-sans">
        Queries fetched so far
      </h1>
      <p className="whitespace-pre-wrap text-4xl md:text-6xl lg:text-9xl font-semibold font-sans tracking-tighter text-black dark:text-white bg-gradient-to-r from-[#9455f4] to-[#9455f4]/50 bg-clip-text">
        <NumberTicker value={count} />
      </p>
    </section>
  );
};

import React from "react";

function CompontsTalent() {
  return (
    <div
      className="edge bg-[url(/images/bg-pattern-home-2.svg)] bg-no-repeat
      bg-position-[center_bottom] xl:bg-[url(/images/bg-pattern-home-1.svg),url(/images/bg-pattern-home-2.svg)]
      xl:bg-position-[left_-6.2rem_top,right_4rem_bottom] "
    >
      <div
        className="grid grid-cols-1 xl:grid-cols-[1.5fr_1fr] gap-4 md:gap-6 xl:max-w-[1200px]
      mx-auto pb-24 text-center xl:text-left "
      >
        <div className="">
          <p className="text-4xl md:text-6xl xl:text-8xl text-white font-[800] mb-4 xl:mb-0">
            Find the <br /> best
            <span className="text-primary-light-coral"> talent</span>
          </p>
        </div>
        <div className="flex relative justify-center xl:items-end
        before:hidden xl:before:block before:absolute before:w-16 before:h-1 
        before:bg-secondary-rapture-blue before:top-0 before:left-0">
          <p className="leading-8 text-white xl:text-lg xl:font-bold xl:le max-w-sm md:max-w-[475px]">
            Finding the right people and building high performing teams can be
            hard. Most companies aren't tapping into the abundance of global
            talent. We're about to change that.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CompontsTalent;

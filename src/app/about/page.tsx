import CompontsMeet from "@/componts/CompontsMeet";
import FooterContact from "@/componts/FooterContact";
import React from "react";

function page() {
  return (
    <div>
      <div
        className="edge pb-32 text-white text-center xl:grid grid-cols-[1fr_1.7fr] xl:items-center xl:text-left
      bg-[url(/images/bg-pattern-about-1-mobile-nav-1.svg)] bg-no-repeat bg-position-[right_-6.2rem_bottom_-6.2rem] md:bg-position-[right_-6.2rem_bottom]"
      >
        <p className="text-3xl font-bold md:text-5xl xl:text-6xl pb-4">About</p>
        <div className="flex justify-center relative ">
          <p
            className="max-w-[375px] md:max-w-[450px] xl:max-w-full xl:text-lg
          before:hidden xl:before:block before:absolute before:w-14 before:h-1 
        before:bg-primary-light-coral before:top-0 before:left-0 xl:pt-12"
          >
            We help companies build dynamic teams made up of top global talent.
            Using our network of passionate professionals we drive innovation
            and deliver incredible outcomes. Talented, diverse teams shape the
            best products and experiences. We'll bring those teams to you.
          </p>
        </div>
      </div>

      <CompontsMeet/>

      <div
        className="edge text-white  bg-secondary-dark-green
      bg-[url(/images/bg-pattern-about-4.svg)] bg-no-repeat bg-position-[left_-6.3rem_top_-6.3rem]
      md:bg-position-[left_top_-6.3rem] xl:bg-position-[left_top] "
      >
        <div className="">
          <p className="text-center text-3xl xl:text-5xl font-bold">Some of our clients</p>
        </div>
        <div className="grid justify-center md:items-center md:grid-cols-[1fr_1fr_1fr_1fr_1fr] gap-9 mt-12">
          <img
            src="/images/logo-the-verge.png"
            alt="the verge"
            className="w-1/2 mx-auto md:mx-0 md:w-fit"
          />
          <img
            src="/images/logo-jakarta-post.png"
            alt="the verge"
            className="w-1/2 mx-auto md:mx-0 md:w-fit"
          />
          <img
            src="/images/logo-the-guardian.png"
            alt="the verge"
            className="w-1/2 mx-auto md:mx-0 md:w-fit"
          />
          <img
            src="/images/logo-tech-radar.png"
            alt="the verge"
            className="w-1/2 mx-auto md:mx-0 md:w-fit"
          />
          <img
            src="/images/logo-gadgets-now.png"
            alt="the verge"
            className="h-1/2 mx-auto md:w-fit"
          />
        </div>
      </div>
      <FooterContact />
    </div>
  );
}

export default page;

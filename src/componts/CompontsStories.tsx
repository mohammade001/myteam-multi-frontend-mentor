import { listStories } from "@/constant";
import Image from "next/image";
import React from "react";

function CompontsStories() {
  return (
    <div
      className="edge text-center bg-secondary-deep-jungle-green text-white py-30 
    bg-[url(/images/bg-pattern-home-4-about-3.svg),url(/images/bg-pattern-home-5.svg)] bg-no-repeat
    bg-position-[left_top,right_bottom]"
    >
      <div className="">
        <p className=" text-3xl lg:text-4xl xl:text-5xl font-bold">
          Delivering real results for top companies. Some of our
          <span className="text-secondary-rapture-blue"> success stories</span>
        </p>
      </div>

      <div className=" grid lg:gap-10 lg:grid-cols-[1fr_1fr_1fr]">
        {listStories.map((item) => (
          <div
            key={item.id}
            className="mt-10 pt-9 bg-[url(/images/icon-quotes.svg)] bg-no-repeat bg-position-[top]"
          >
            <p className="font-bold text-[14px] mb-5 lg:text-[16px] lg:leading-7 lg:font-[600]">
              {item.stori}
            </p>
            <p className="font-bold text-lg text-secondary-rapture-blue">
              {item.name}
            </p>
            <p className="text-sm mb-5">{item.tasks}</p>
            <div className="flex justify-center ">
              <Image
                className="rounded-full border-2 border-white"
                src={item.image}
                alt={`image ${item.name}`}
                width={60}
                height={60}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CompontsStories;

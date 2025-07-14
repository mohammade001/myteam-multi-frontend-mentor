import { listMeet } from "@/constant";
import Image from "next/image";
import React from "react";
import CompontDirector from "./CompontDirector";

function CompontsMeet() {
  return (
    <div
      className="edge text-white bg-secondary-deep-jungle-green pb-24
    bg-[url(/images/bg-pattern-home-4-about-3.svg),url(/images/bg-pattern-about-2-contact-1.svg)] bg-no-repeat
    bg-position-[right_bottom,left_-6.2rem_top_-6.25rem] md:bg-position-[right_bottom,left_-6.25rem_top]"
    >
      <p className=" text-3xl lg:text-4xl xl:text-5xl font-bold text-center">
        Meet the directors
      </p>
      <div
        className="text-center mt-10 grid gap-12 sm:grid-cols-[1fr_1fr] sm:gap-x-4
      lg:grid-cols-[1fr_1fr_1fr] lg:gap-x-5"
      >
        {listMeet.map((items) => (
          <div
            key={items.name}
            className="bg-secondary-sacramento-state-green pt-8 pb-12"
          >
            <Image
              src={items.image}
              alt={`image ${items.name}`}
              width={70}
              height={70}
              className="mx-auto rounded-full border-2 border-white mb-5"
            />
            <p className="font-bold text-secondary-rapture-blue">
              {items.name}
            </p>
            <p className="text-white text-[13px]">{items.tasks}</p>
            <div className="relative flex justify-center">
              <CompontDirector data={items} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CompontsMeet;

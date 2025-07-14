import Image from "next/image";
import React from "react";

function CompontsTeam() {
  return (
    <div
      className="edge xl:grid xl:grid-cols-[1fr_1fr] bg-secondary-sacramento-state-green
    bg-[url(/images/bg-pattern-home-3.svg)] bg-no-repeat bg-position-[top_right_-6.2rem]
    lg:bg-position-[bottom_right_-6.2rem]"
    >
      <div className="relative">
        <p
          className="before:absolute before:w-16 before:top-0 before:left-0
        before:h-1 before:bg-primary-light-coral pt-8
        text-3xl font-[800] max-w-[400px] sm:max-w-fit tracking-tight text-white
        xl:text-5xl xl:font-bold xl:max-w-[400px]"
        >
          Build & manage distributed teams like no one else.
        </p>
      </div>

      <div className="grid gap-8 mt-8 text-center sm:text-left">
        <div className="sm:flex sm:items-center gap-8">
          <div className="flex justify-center mb-4">
            <Image
              src="/images/icon-person.svg"
              alt="person"
              width={70}
              height={70}
            />
          </div>

          <div className="">
            <p className="text-lg text-primary-light-coral font-bold mb-2">
              Experienced Individuals
            </p>
            <div className="flex justify-center ">
              <p className="text-white max-w-[450px] sm:max-w-fit xl:max-w-[470px] ">
                Our network is make up of highly experienced professionals who
                are passionate about what they do.
              </p>
            </div>
          </div>
        </div>

        <div className="sm:flex sm:items-center gap-8">
          <div className="flex justify-center mb-4">
            <Image
              src="/images/icon-cog.svg"
              alt="person"
              width={70}
              height={70}
            />
          </div>

          <div className="">
            <p className="text-lg text-primary-light-coral font-bold mb-2">
              Easy to Implement
            </p>
            <div className="flex justify-center">
              <p className="text-white max-w-[450px] sm:max-w-fit xl:max-w-[470px]">
                Our processes have been refined over years of implementation
                meaning our teams always deliver.
              </p>
            </div>
          </div>
        </div>

        <div className="sm:flex sm:items-center gap-8">
          <div className="flex justify-center mb-4">
            <Image
              src="/images/icon-chart.svg"
              alt="person"
              width={70}
              height={70}
            />
          </div>

          <div className="">
            <p className="text-lg text-primary-light-coral font-bold mb-2">
              Enhanced Productivity
            </p>
            <div className="flex justify-center">
              <p className="text-white max-w-[450px] sm:max-w-fit xl:max-w-[470px]">
                Our customized platform with in-built analytics helps you manage
                your distributed teams.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompontsTeam;

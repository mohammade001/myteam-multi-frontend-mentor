"use client";
import { listMeetType } from "@/type";
import Link from "next/link";
import React, { useState } from "react";

interface listMeetDirectorType {
  data: listMeetType;
}

function CompontDirector({ data }: listMeetDirectorType) {
  const { director, name, linkedin, twitter } = data;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        className={`size-12 flex justify-center items-center z-40
                    absolute transition duration-300 bottom-[-72px] cursor-pointer
      ${
        isOpen
          ? "bg-secondary-rapture-blue rotate-45 hover:bg-primary-light-coral"
          : "bg-primary-light-coral hover:bg-secondary-rapture-blue"
      } rounded-full`}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <img src="/images/icon-cross.svg" alt="cross" />
      </button>
      <div
        className="absolute top-[-165.5] h-[213.5px] w-full z-10 overflow-hidden
      flex justify-center "
      >
        <div
          className={`${
            isOpen ? "top-0" : "top-[-230px]"
          } absolute w-full pt-8 pb-12 h-[213.5px]
                        transition-[top] duration-500 ease-in bg-secondary-dark-green`}
        >
          <p className="font-bold text-secondary-rapture-blue pb-4">{name}</p>
          <p className="pb-6 text-[14px]">{director}</p>
          <div className="flex justify-center gap-4">
            <div>
              <Link href={twitter} className="block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  className="transition-colors duration-200 fill-white hover:fill-primary-light-coral"
                >
                  <path d="M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z"></path>{" "}
                </svg>
              </Link>
            </div>

            <div>
              <Link href={linkedin} className="block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  className="transition-colors duration-200 fill-white hover:fill-primary-light-coral"
                >
                  <path d="M18 0H2C.9 0 0 .9 0 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zM6 17H3V8h3v9zM4.5 6.3c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zM17 17h-3v-5.3c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5V17H8V8h3v1.2c.5-.8 1.6-1.4 2.5-1.4 1.9 0 3.5 1.6 3.5 3.5V17z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CompontDirector;

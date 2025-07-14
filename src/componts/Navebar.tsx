"use client";
import Link from "next/link";
import React, { useState } from "react";
import Contact from "./Contact";
import Image from "next/image";
import NavebarMobail from "./NavebarMobail";

function Navebar() {
  const [isOpenHamburger, setIsOpenHamburger] = useState(false);
  return (
    <div className="edge bg-primary-midnight-green flex justify-between items-center">
      <div className="flex items-end gap-8 text-white">
        <div className="lg:mr-20 mr-10">
          <Link href="/" className="font-bold lg:text-4xl text-2xl">
            myteam
          </Link>
        </div>
        <Link
          href="/"
          className="hidden md:inline transition text-lg font-bold hover:text-primary-light-coral"
        >
          home
        </Link>
        <Link
          href="/about"
          className="hidden md:inline transition text-lg font-bold  hover:text-primary-light-coral"
        >
          about
        </Link>
      </div>
      <div className="hidden md:inline">
        <Contact
          title="contact us"
          href="/contactus"
          structureStyle="bg-transparent hover:bg-white px-8 py-2 rounded-full border-2 border-white"
          contentStyle="text-white hover:text-black font-bold"
        />
      </div>
      <button
        onClick={() => {
          setIsOpenHamburger(true);
        }}
        className="cursor-pointer md:hidden"
      >
        <Image
          src={`/images/icon-hamburger.svg`}
          height={30}
          width={30}
          alt="icon-hamburger"
        />
      </button>
          <NavebarMobail
            isActive={isOpenHamburger}
            setIsActive={() => setIsOpenHamburger(false)}
          />
        
    </div>
  );
}

export default Navebar;

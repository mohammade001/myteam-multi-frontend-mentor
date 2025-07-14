import { NavebarMobailType } from "@/type";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
import Contact from "./Contact";

function NavebarMobail({ isActive, setIsActive }: NavebarMobailType) {
  return (
    <>
      <Transition appear as={Fragment} show={isActive}>
        <Dialog as="div" onClose={setIsActive} className=" md:hidden">
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <DialogBackdrop className="fixed inset-0 bg-black/50" />
          </TransitionChild>

          <TransitionChild
            as={Fragment}
            enter="ease-out duration-500"
            enterFrom="right-[-80%]"
            enterTo="right-0"
            leave="ease-in duration-300"
            leaveFrom="right-0"
            leaveTo="right-[-80%]"
          >
            <div
              className="fixed min-h-screen w-[300px] px-12 py-20 top-0 right-0 
            bg-secondary-police-blue bg-[url('/images/bg-pattern-about-1-mobile-nav-1.svg')] bg-no-repeat bg-position-[bottom_right_-100px]"
            >
              <DialogPanel>
                <div className="flex justify-end mb-5">
                  <button className="cursor-pointer " onClick={setIsActive}>
                    <Image
                      className=""
                      src="/images/icon-close.svg"
                      alt="icon-close"
                      width={25}
                      height={25}
                    />
                  </button>
                </div>
                <div className="grid gap-5 mb-10 text-white">
                  <Link
                    href="/"
                    className=" transition text-xl font-bold hover:text-primary-light-coral"
                    onClick={setIsActive}
                  >
                    home
                  </Link>
                  <Link
                    href="/about"
                    className=" transition text-xl font-bold  hover:text-primary-light-coral"
                    onClick={setIsActive}
                  >
                    about
                  </Link>
                </div>
                <div className="flex justify-center">
                  <Contact
                    onClick={setIsActive}
                    title="contact us"
                    href="/contactus"
                    structureStyle="bg-transparent hover:bg-white px-10 py-3 rounded-full border-2 border-white"
                    contentStyle="text-white hover:text-black font-bold"
                  />
                </div>
              </DialogPanel>
            </div>
          </TransitionChild>
        </Dialog>
      </Transition>
    </>
  );
}

export default NavebarMobail;

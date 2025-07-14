import React from 'react'
import Contact from './Contact'

function FooterContact() {
  return (
    <div
      className="edge md:flex md:justify-between md:items-center bg-primary-light-coral bg-[url(/images/bg-pattern-home-6-about-5.svg)] 
    bg-no-repeat bg-position-[left_bottom_-1.6rem] lg:px-60 xl:px-[350px] lg:bg-bottom-left text-center"
    >
      <p className="text-secondary-dark-green text-3xl font-[800] mb-8 md:mb-0">
        Ready to get started?
      </p>
      <div className="">
        <Contact
          title="contact us"
          href="/contactus"
          structureStyle="bg-transparent 
        hover:bg-secondary-dark-green px-8 py-2 rounded-full border-2 border-secondary-dark-green"
          contentStyle="text-secondary-dark-green hover:text-white font-bold"
        />
      </div>
    </div>
  );
}

export default FooterContact
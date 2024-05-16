import React from 'react';
import { Icons } from 'src/assets/icons/_icons';
import { socials } from 'src/data/socials';

const ContactMe: React.FunctionComponent = () => {
  return (
    <section className="container relative max-w-[1000px] flex flex-col z-0 self-center mt-[6rem] mb-[10rem] max-lg:mt-[6rem] max-lg:mb-[4rem] max-lg:max-w-full max-lg:px-4">
      <h1 className="font-space-grotesk-700 mt-5 text-[35px] mb-4 text-black max-lg:text-[30px]">
        Contact Me
      </h1>
      {socials.map(social => (
        <a
          key={social.social}
          target="_blank"
          rel="noreferrer"
          className="text-black san-serif mb-1 flex items-center"
          href={social.link}>
          <b className="mr-1">{social.social}: </b>
          <i>{social.display}</i>
          <img className="w-[13px] h-[13px] ml-1" src={Icons.share} />
        </a>
      ))}
    </section>
  );
};

export default ContactMe;

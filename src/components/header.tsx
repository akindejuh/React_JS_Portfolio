import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Icons } from 'src/assets/icons/_icons';
import { Images } from 'src/assets/images/_images';
import { ref, getDownloadURL } from '@firebase/storage';
import { fb_storage } from 'src/configs/firebase';
import { loadingToast, errorToast } from 'src/handlers/toast';
import { downloadFile } from 'src/utils/file-saver';

const Header: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const header_links: { link_name: string }[] = [
    { link_name: 'About' },
    { link_name: 'Services' },
    { link_name: 'Projects' },
    { link_name: 'Experience' },
    { link_name: 'Contact' },
  ];

  const toggle_menu = (): void => {
    setIsOpen(!isOpen);
  };

  const get_resume = async () => {
    const storageRef = ref(fb_storage, '/resume/Akindeju_CV.pdf');

    try {
      await getDownloadURL(storageRef)
        .then(async url => {
          await downloadFile({ file_url: url, file_name: 'Akindeju_CV.pdf' });
        })
        .catch(error => {
          error && errorToast({ message: 'Error downloading File!' });
        });
    } catch (err) {
      errorToast({ message: (err as any)?.message });
    }
  };

  return (
    <header className="text-white bg-white py-4 fixed top-0 w-full z-40 h-[6rem] shadow-lg flex max-md:shadow-none max-md:h-[4.7rem]">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center">
          <img className="w-[45px] h-[45px] rounded-full" src={Images.logo} />
        </div>
        <div className="hidden md:flex items-center space-x-8">
          {header_links.map(link => (
            <a
              key={link.link_name}
              className="text-black cursor-pointer font-space-grotesk-700">
              {link.link_name}
            </a>
          ))}
          <button
            onClick={get_resume}
            className="bg-black h-[44px] px-3 w-[155px] flex items-center justify-center rounded transition-all duration-300 ease-in-out hover:bg-opacity-70">
            <p className="font-space-grotesk-700">Download CV</p>
            <img className="ml-2 w-[15px] h-[15px]" src={Icons.download} />
          </button>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggle_menu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="black">
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden absolute top-full left-0 w-full text-white pb-12 bg-white shadow-xl">
          <div className="container mx-auto py-2 px-6 text-center">
            {header_links.map(link => (
              <a
                key={link.link_name}
                className="text-black block py-3 font-space-grotesk-500">
                {link.link_name}
              </a>
            ))}
            <button className="bg-black w-full h-[44px] px-3 flex items-center justify-center rounded mt-2">
              <p className="font-space-grotesk-500">Download CV</p>
              <img className="ml-2 w-[13px] h-[13px]" src={Icons.download} />
            </button>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;

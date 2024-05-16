import React from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from 'src/components/header';
import AboutMe from 'src/sections/about-me';
import ContactMe from 'src/sections/contact-me';
// import MyExperience from 'src/sections/my-experience';
import MyWork from 'src/sections/my-work';

const App: React.FunctionComponent = () => {
  return (
    <div className="overflow-y-hidden">
      <Header />
      <div className="flex flex-col h-full">
        <AboutMe />
        <MyWork />
        {/* <MyExperience /> */}
        <ContactMe />
      </div>
      <ToastContainer />
    </div>
  );
};

export default App;
